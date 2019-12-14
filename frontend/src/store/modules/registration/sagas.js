import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { } from './actions';

export function* createRegistration({ payload }) {
  try {
    yield call(api.post, 'registration', payload.data);
    toast.success('Matrícula cadastrada com sucesso');

    history.push('/registration');
  } catch (error) {
    toast.error('Não foi possível cadastrar nova matrícula');
  }
}

export function* updateRegistration({ payload }) {
  // try {
  //   const { name, email, avatar_id, ...rest } = payload.data;
  //   const profile = {
  //     name,
  //     email,
  //     avatar_id,
  //     ...(rest.oldPassword ? rest : {}),
  //   };
  //   const response = yield call(api.put, 'users', profile);
  //   toast.success('Perfil atualizado com sucesso');
  //   yield put(updateProfileSuccess(response.data));
  // } catch (error) {
  //   toast.error('Não foi possível atualizar o perfil');
  //   yield put(updateProfileFailure());
  // }
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
]);
