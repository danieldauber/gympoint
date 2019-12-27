import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {} from './actions';

export function* createPlan({ payload }) {
  try {
    const { title, duration, price } = payload.data;

    const plan = {
      title,
      duration,
      price,
    };

    yield call(api.post, 'plans', plan);
    toast.success('Plano cadastrado com sucesso');

    history.push('/plans');
  } catch (error) {
    toast.error('Não foi possível cadastrar o novo plano');
  }
}

export function* updatePlan({ payload }) {
  try {
    const { title, duration, price, id } = payload.data;

    const plan = {
      title,
      duration,
      price,
    };

    yield call(api.put, `plans/${id}`, plan);
    toast.success('Plano editado com sucesso');

    history.push('/plans');
  } catch (error) {
    toast.error('Não foi possível editar plano');
  }
}

export function* deletePlan({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `plans/${id}`);

    toast.success('Plano removido com sucesso');
  } catch (error) {
    toast.error(`Não foi possível deletar o plano`);
  }
}

export default all([
  takeLatest('@plans/CREATE_PLAN_REQUEST', createPlan),
  takeLatest('@plans/UPDATE_PLAN_REQUEST', updatePlan),
  takeLatest('@plans/DELETE_PLAN_REQUEST', deletePlan),
]);
