import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdDone, MdChevronLeft } from 'react-icons/md';

import history from '~/services/history';

import { Container, BackButton, SaveButton, FormElement } from './styles';
import { updateStudentRequest } from '~/store/modules/student/actions';

export default function StudentForm() {
  const dispatch = useDispatch();
  const student = useSelector(state => state.student.student);

  const schema = Yup.object().shape({
    id: Yup.number(),
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email('Insira um email válido')
      .required('E-mail é obrigatório'),
    age: Yup.number()
      .required('a idade é obrigatória')
      .typeError('Idade precisa ser um número'),
    weight: Yup.number()
      .typeError('Idade precisa ser um número')
      .required('o peso é obrigatório'),
    height: Yup.number()
      .typeError('Idade precisa ser um número')
      .required('a altura é obrigatória'),
  });

  function handleSubmit(data) {
    dispatch(updateStudentRequest(data));
  }

  return (
    <Container>
      <header>
        <h1>Cadastro de aluno</h1>

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
        initialData={student}
        id="form"
        onSubmit={handleSubmit}
      >
        <Input type="hidden" name="id" />
        <label htmlFor="name">Nome completo</label>
        <Input name="name" type="text" placeholder="Seu Nome" />
        <label htmlFor="email">Endereço de e-mail</label>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <div>
          <div className="input-group">
            <label htmlFor="age">Idade</label>
            <Input name="age" type="number" />
          </div>
          <div className="input-group">
            <label htmlFor="weight">PESO (em kg)</label>
            <Input name="weight" type="number" />
          </div>
          <div className="input-group">
            <label htmlFor="height">Altura</label>
            <Input name="height" type="number" />
          </div>
        </div>
      </FormElement>
    </Container>
  );
}
