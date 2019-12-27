import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { checkInSuccess, checkInFailure } from './actions';

export function* checkIn({ payload }) {
  try {
    const { user } = payload;

    const response = yield call(api.post, `/students/${user}/checkins`);

    Alert.alert('Sucesso!', 'Check-in feito com sucesso');

    yield put(checkInSuccess(response.data));
  } catch (error) {
    Alert.alert('Erro no Checkin', 'Houve um erro no Checkin');
    yield put(checkInFailure());
  }
}

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@checkin/CHECK_IN_REQUEST', checkIn),
]);
