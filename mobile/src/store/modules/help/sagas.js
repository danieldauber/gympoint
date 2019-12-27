import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { helpSuccess, helpFailure } from './actions';

export function* sendHelp({ payload }) {
  try {
    const { help } = payload;

    const response = yield call(
      api.post,
      `/students/${help.user}/help-orders`,
      { question: help.question }
    );

    Alert.alert('Sucesso!', 'Pedido enviado com sucesso');

    yield put(helpSuccess(response.data));
  } catch (error) {
    Alert.alert('Erro no envio', 'Houve um erro no envio do pedido');
    yield put(helpFailure());
  }
}

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@help/HELP_REQUEST', sendHelp),
]);
