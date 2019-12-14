import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { updateHelpSuccess, updateHelpFailure } from './actions';

export function* updateAnswer({ payload }) {
  try {
    const { answer, id } = payload.data;

    const data = {
      answer,
    };

    yield call(api.put, `/help-orders/${id}/answer/`, data);
    toast.success('Pergunta respondida com sucesso');

    yield put(updateHelpSuccess(data));
  } catch (error) {
    yield put(updateHelpFailure());
    toast.error('Não foi possível responder à pergunta');
  }
}

export default all([takeLatest('@help/UPDATE_HELP_REQUEST', updateAnswer)]);
