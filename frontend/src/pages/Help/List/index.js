import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { Container, TableContainer, ButtonEdit } from './styles';

import Modal from '../Modal';

import api from '~/services/api';

export default function List() {
  const [helps, setHelps] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [item, setItem] = useState('');

  useEffect(() => {
    async function findPlans() {
      const response = await api.get(`/help-orders`);

      setHelps(response.data);
    }

    findPlans();
  }, []);

  function handleModal(help) {
    setItem(help);
    setToggle(!toggle);
  }

  // function handleEdit(plan) {
  //   dispatch(editPlanRequest(plan));
  //   history.push('/plans/edit');
  // }

  return (
    <Container>
      <Modal toggle={toggle} help={item} />
      <header>
        <h1>Pedidos de auxílio</h1>
      </header>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <td width="80%">ALUNO</td>
            </tr>
          </thead>
          <tbody>
            {helps.map(help => (
              <tr key={help.id}>
                <td>{help.student.name}</td>
                <td>
                  <ButtonEdit type="button" onClick={() => handleModal(help)}>
                    responder
                  </ButtonEdit>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </Container>
  );
}
