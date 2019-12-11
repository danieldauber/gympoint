import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {} from './actions';

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

export default all([
  takeLatest('@registration/UPDATE_REGISTRATION_REQUEST', updateRegistration),
]);
