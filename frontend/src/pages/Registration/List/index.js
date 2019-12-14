import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  TableContainer,
  ButtonEdit,
  ButtonDelete,
  Active,
} from './styles';

import api from '~/services/api';

import { deleteRegistrationRequest } from '~/store/modules/registration/actions';

export default function List() {
  const [registrations, setRegistrations] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function findRegistrations() {
      const response = await api.get(`/registrations`);

      const data = response.data.map(registration => {
        return {
          ...registration,
          startFormatted: format(
            parseISO(registration.start_date),
            "d 'de' MMMM 'de' yyyy",
            {
              locale: pt,
            }
          ),
          finishFormatted: format(
            parseISO(registration.end_date),
            "d 'de' MMMM 'de' yyyy",
            {
              locale: pt,
            }
          ),
        };
      });

      setRegistrations(data);
    }

    findRegistrations();
  }, []);

  function handleDelete(id) {
    const res = window.confirm('Tem certeza que deseja deletar?');
    if (res === true) {
      dispatch(dispatch(deleteRegistrationRequest(id)));
      const s = registrations.filter(r => r.id !== id);
      setRegistrations(s);
    }
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando matrículas</h1>

        <aside>
          <Link to="/registration/create">
            <MdAdd size={20} color="#fff" /> Cadastrar
          </Link>
        </aside>
      </header>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <td width="20%">ALUNO</td>
              <td width="20%">PLANO</td>
              <td width="20%">INÍCIO</td>
              <td width="20%">TÉRMINO</td>
              <td width="10%">ATIVA</td>
              <td width="10%" />
            </tr>
          </thead>
          <tbody>
            {registrations.map(registration => (
              <tr key={registration.id}>
                <td>{registration.student.name}</td>
                <td>{registration.plan.title}</td>
                <td>{registration.startFormatted}</td>
                <td>{registration.finishFormatted}</td>
                <td>
                  {registration.active}
                  <Active size={20} active={registration.active.toString()} />
                </td>
                <td>
                  <ButtonEdit type="button" onClick={() => {}}>
                    editar
                  </ButtonEdit>
                  <ButtonDelete
                    type="button"
                    onClick={() => handleDelete(registration.id)}
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
