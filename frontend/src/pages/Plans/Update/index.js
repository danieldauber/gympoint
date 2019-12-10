import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdDone, MdChevronLeft } from 'react-icons/md';

import { Container, BackButton, SaveButton, FormElement } from './styles';
import history from '~/services/history';

import { updatePlanRequest } from '~/store/modules/plans/actions';

export default function Create() {
  const dispatch = useDispatch();
  const [total, setTotal] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const plan = useSelector(state => state.plans.plan);

  const schema = Yup.object().shape({
    title: Yup.string().required('Nome do plano é obrigatório'),
    id: Yup.number().required(),
    duration: Yup.number()
      .required('A duração é obrigatória')
      .typeError('Idade precisa ser um número'),
    price: Yup.number()
      .required('a idade é obrigatória')
      .typeError('Idade precisa ser um número'),
  });

  useEffect(() => {
    setTotal(price * duration);
  }, [price, duration]);

  useEffect(() => {
    setDuration(plan.duration);
    setPrice(plan.price);
  }, [plan.duration, plan.price]);

  function handleSubmit(data) {
    dispatch(updatePlanRequest(data));
  }
  return (
    <Container>
      <header>
        <h1>Cadastro de plano</h1>

        <aside>
          <BackButton type="button" onClick={() => history.goBack()}>
            <MdChevronLeft size={20} color="#FFF" /> Voltar
          </BackButton>

          <SaveButton type="submit" form="form">
            <MdDone size={20} color="#ddd" />
            Salvar
          </SaveButton>
        </aside>
      </header>

      <FormElement
        schema={schema}
        initialData={plan}
        id="form"
        onSubmit={handleSubmit}
      >
        <Input name="id" type="hidden" />
        <label htmlFor="name">TÍTULO DO PLANO</label>
        <Input name="title" type="text" />
        <div>
          <div className="input-group">
            <label htmlFor="age">DURAÇÃO (em meses)</label>
            <Input
              name="duration"
              type="number"
              onChange={e => setDuration(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="weight">PREÇO MENSAL</label>
            <Input
              name="price"
              onChange={e => setPrice(e.target.value)}
              type="number"
            />
          </div>
          <div className="input-group">
            <label htmlFor="height">PREÇO TOTAL</label>
            <Input disabled name="total" value={total} type="number" />
          </div>
        </div>
      </FormElement>
    </Container>
  );
}
