import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  updateStudentSuccess,
  updateStudentFailure,
  createStudentSuccess,
  createStudentFailure,
} from './actions';

export function* updateStudent({ payload }) {
  try {
    const { name, email, age, weight, height, id } = payload.data;

    const student = {
      name,
      email,
      age,
      weight,
      height,
      id,
    };

    const response = yield call(api.put, `student/${id}`, student);

    toast.success('Estudante atualizado com sucesso');

    yield put(updateStudentSuccess(response.data));
    history.push('/students/');
  } catch (error) {
    toast.error('Não foi possível atualizar o estudante');
    yield put(updateStudentFailure());
  }
}

export function editStudent() {
  history.push('/student/edit');
}

export function* createStudent({ payload }) {
  try {
    const { name, email, age, weight, height } = payload.data;

    const student = {
      name,
      email,
      age,
      weight,
      height,
    };

    const response = yield call(api.post, 'student', student);

    toast.success('Estudante cadastrado com sucesso');

    yield put(createStudentSuccess(response.data));
    history.push('/students');
  } catch (error) {
    toast.error(`Não foi possível cadastrar o estudante`);
    yield put(createStudentFailure());
  }
}

export function* deleteStudent({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `student/${id}`);

    toast.success('Estudante removido com sucesso');

    history.push('/students');
  } catch (error) {
    toast.error(`Não foi possível deletar o estudante`);
  }
}

export default all([
  takeLatest('@student/UPDATE_STUDENT_REQUEST', updateStudent),
  takeLatest('@student/EDIT_STUDENT_REQUEST', editStudent),
  takeLatest('@student/CREATE_STUDENT_REQUEST', createStudent),
  takeLatest('@student/DELETE_STUDENT_REQUEST', deleteStudent),
]);
