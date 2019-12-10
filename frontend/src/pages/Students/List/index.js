import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

import api from '~/services/api';
import {
  editStudentRequest,
  deleteStudentRequest,
} from '~/store/modules/student/actions';

import { Container, TableContainer, ButtonEdit, ButtonDelete } from './styles';

export default function StudentsList() {
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  function handleEdit(student) {
    dispatch(editStudentRequest(student));
    setSearch(' ');
  }

  function handleDelete(id) {
    const r = window.confirm('Tem certeza que deseja deletar?');
    if (r === true) {
      dispatch(deleteStudentRequest(id));
      const s = students.filter(student => student.id !== id);
      setStudents(s);
    }
  }

  function filter(value) {
    setTimeout(() => {
      setSearch(value);
    }, 2000);
  }

  useEffect(() => {
    async function findStudents() {
      const response = await api.get(`/students?name=${search}&page=${page}`);

      setStudents(response.data);
    }

    findStudents();
  }, [page, search]);

  return (
    <Container>
      <header>
        <h1>Gerenciando alunos</h1>

        <aside>
          <Link to="/student/create">
            <MdAdd size={20} color="#fff" /> Cadastrar
          </Link>
          <div>
            <MdSearch size={20} color="#ddd" />
            <input
              type="text"
              name="search"
              onChange={e => filter(e.target.value)}
              placeholder="Buscar aluno"
            />
          </div>
        </aside>
      </header>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <td width="35%">Nome</td>
              <td width="35%">E-mail</td>
              <td width="20%">Idade</td>
              <td width="10%" />
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <ButtonEdit type="button" onClick={() => handleEdit(student)}>
                    editar
                  </ButtonEdit>
                  <ButtonDelete
                    type="button"
                    onClick={() => handleDelete(student.id)}
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
