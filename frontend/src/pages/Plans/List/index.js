import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { Container, TableContainer, ButtonEdit, ButtonDelete } from './styles';

import api from '~/services/api';
import history from '~/services/history';
import {
  deletePlanRequest,
  editPlanRequest,
} from '~/store/modules/plans/actions';

export default function List() {
  const [plans, setPlans] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function findPlans() {
      const response = await api.get(`/plans`);

      setPlans(response.data);
    }

    findPlans();
  }, []);

  function handleEdit(plan) {
    dispatch(editPlanRequest(plan));
    history.push('/plans/edit');
  }

  function handleDelete(id) {
    const r = window.confirm('Tem certeza que deseja deletar?');
    if (r === true) {
      dispatch(deletePlanRequest(id));
      const p = plans.filter(plan => plan.id !== id);
      setPlans(p);
    }
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando planos</h1>

        <aside>
          <Link to="/plans/create">
            <MdAdd size={20} color="#fff" /> Cadastrar
          </Link>
        </aside>
      </header>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <td width="40%">TÍTULO</td>
              <td width="20%">DURAÇÃO</td>
              <td width="20%">VALOR p/ MÊS</td>
              <td width="10%" />
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td>{plan.duration}</td>
                <td>{plan.price}</td>
                <td>
                  <ButtonEdit type="button" onClick={() => handleEdit(plan)}>
                    editar
                  </ButtonEdit>
                  <ButtonDelete
                    type="button"
                    onClick={() => handleDelete(plan.id)}
                  >
                    apagar
                  </ButtonDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </Container>
  );
}
