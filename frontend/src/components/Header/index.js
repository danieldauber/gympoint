import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-header.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <ul>
            <li>
              <Link to="/dashboard">ALUNOS</Link>
            </li>
            <li>
              <Link to="/">PLANOS</Link>
            </li>
            <li>
              <Link to="/">MATRÍCULAS</Link>
            </li>
            <li>
              <Link to="/">PEDIDOS DE AUXÍLIO</Link>
            </li>
          </ul>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/logoff">sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
