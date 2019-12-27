import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {} from './actions';

export function* createRegistration({ payload }) {
  try {
    yield call(api.post, 'registration', payload.data);
    toast.success('Matrícula cadastrada com sucesso');

    history.push('/registration');
  } catch (error) {
    toast.error('Não foi possível cadastrar nova matrícula');
  }
}

export function editRegistration() {
  history.push('/registration/update');
}

export function* updateRegistration({ payload }) {
  console.tron.log(payload);

  try {
    yield call(api.put, `registration/${payload.data.id}`, payload.data);
    toast.success('Matrícula editada com sucesso');

    history.push('/registration');
  } catch (error) {
    toast.error('Não foi possível editar a matrícula');
  }
}

export function* deleteRegistration({ payload }) {
  try {
    const id = payload.data;

    yield call(api.delete, `registration/${id}`);

    toast.success('Matrícula removida com sucesso');
  } catch (error) {
    toast.error(`Não foi possível deletar a matrícula`);
  }
}

export default all([
  takeLatest('@registration/UPDATE_REGISTRATION_REQUEST', updateRegistration),
  takeLatest('@registration/DELETE_REGISTRATION_REQUEST', deleteRegistration),
  takeLatest('@registration/CREATE_REGISTRATION_REQUEST', createRegistration),
  takeLatest('@registration/EDIT_REGISTRATION_REQUEST', editRegistration),
]);
