import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { user } = payload;

    yield put(signInSuccess(user));

    // history.push('/dashboard');
  } catch (error) {
    Alert.alert('Erro no login', 'Houve um erro no login');
    yield put(signFailure());
  }
}

// export function setToken({ payload }) {
//   if (!payload) return;

//   const { token } = payload.auth;

//   if (token) {
//     api.defaults.headers.Authorization = `Bearer ${token}`;
//   }
// }

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
