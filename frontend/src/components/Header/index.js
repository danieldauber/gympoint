import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/logo-header.svg';

import { Container, Content, Profile } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <ul className="nav nav-pills">
            <li>
              <NavLink activeStyle={{ color: '#000' }} to="/students">
                ALUNOS
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: '#000' }} to="/plans">
                PLANOS
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: '#000' }} to="/registration">
                MATRÍCULAS
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: '#000' }} to="/help">
                PEDIDOS DE AUXÍLIO
              </NavLink>
            </li>
          </ul>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleLogout}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
