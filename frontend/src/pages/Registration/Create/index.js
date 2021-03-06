import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Select } from '@rocketseat/unform';
import { format, parseISO, addMonths } from 'date-fns';
import * as Yup from 'yup';
import { MdDone, MdChevronLeft } from 'react-icons/md';
import AsyncSelect from 'react-select/async';

import { Container, BackButton, SaveButton, FormElement } from './styles';
import history from '~/services/history';
import api from '~/services/api';

import { createRegistrationRequest } from '~/store/modules/registration/actions';

export default function Create() {
  const dispatch = useDispatch();
  const [plans, setPlans] = useState([]);
  const [plan, setPlan] = useState([]);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [t, setT] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [students, setStudents] = useState([]);

  const schema = Yup.object().shape({
    student: Yup.number().required('O aluno é obrigatório'),
    plan: Yup.string().required('O plano é obrigatório'),
    date_start: Yup.string().required('A data de início é obrigatória'),
  });

  useEffect(() => {
    const { total, duration } = plan;

    if (start && duration) {
      const endDate = addMonths(parseISO(start), duration);
      setT(total);
      setEnd(format(endDate, 'yyyy-MM-dd'));
    }
  }, [plan, start]);

  useEffect(() => {
    async function getPlans() {
      const response = await api.get('plans');

      const options = response.data.map(p => {
        return {
          id: p.id,
          title: p.title,
          total: p.total,
          duration: p.duration,
        };
      });
      setPlans(options);
    }
    getPlans();
  }, []);

  useEffect(() => {
    async function getStudents() {
      const response = await api.get('students');

      const options = response.data.map(p => {
        return {
          value: p.id,
          label: p.name,
        };
      });
      setStudents(options);
    }
    getStudents();
  }, []);

  const filterStudents = inputValue => {
    const s = students.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSelectedStudent(s);
    return s;
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterStudents(inputValue));
    }, 1000);
  };

  function handleSubmit(formData) {
    const data = {
      student_id: selectedStudent[0].value,
      plan_id: formData.plan,
      start_date: formData.date_start,
    };
    dispatch(createRegistrationRequest(data));
  }
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
        <div className="select_student">
          <AsyncSelect
            name="student"
            isSearchable
            width="100%"
            options={students}
            loadOptions={loadOptions}
          />
        </div>

        <div className="input_group">
          <div className="input-group select">
            <label htmlFor="plan">PLANO</label>
            <div>
              <Select
                options={plans}
                name="plan"
                onChange={e =>
                  setPlan(
                    plans.find(p => p.id === parseInt(e.target.value, 10))
                  )
                }
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="date_start">DATA DE INÍCIO</label>
            <Input
              name="date_start"
              type="date"
              onChange={e => setStart(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="date_end">DATA DE TERMINO</label>
            <Input name="date_end" type="date" disabled value={end} />
          </div>
          <div className="input-group">
            <label htmlFor="total">VALOR FINAL</label>
            <Input name="total" type="text" disabled value={t} />
          </div>
        </div>
      </FormElement>
    </Container>
  );
}
