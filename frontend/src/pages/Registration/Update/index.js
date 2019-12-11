import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdDone, MdChevronLeft } from 'react-icons/md';
import Select from 'react-select';

import { Container, BackButton, SaveButton, FormElement } from './styles';
import history from '~/services/history';

import { createPlanRequest } from '~/store/modules/plans/actions';

export default function Create() {
  const dispatch = useDispatch();
  const [total, setTotal] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');

  const schema = Yup.object().shape({
    title: Yup.string().required('Nome do plano é obrigatório'),
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

  function handleSubmit(data) {
    console.tron.log(data);
    dispatch(createPlanRequest(data));
  }

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <Container>
      <header>
        <h1>Cadastro de matrículas</h1>

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

      <FormElement schema={schema} id="form" onSubmit={handleSubmit}>
        <label htmlFor="name">ALUNO</label>
        <Select options={options} />
        <div>
          <div className="input-group">
            <label htmlFor="plan">PLANO</label>
            <Input
              name="duration"
              type="number"
              onChange={e => setDuration(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="date_start">DATA DE INÍCIO</label>
            <Input name="date_start" type="date" />
          </div>
          <div className="input-group">
            <label htmlFor="date_end">DATA DE TERMINO</label>
            <Input name="date_end" type="date" disabled />
          </div>
          <div className="input-group">
            <label htmlFor="total">VALOR FINAL</label>
            <Input name="total" type="text" disabled />
          </div>
        </div>
      </FormElement>
    </Container>
  );
}
