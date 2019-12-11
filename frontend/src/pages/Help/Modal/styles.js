import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${props => (props.display ? 'flex' : 'none')};

  flex: 1;

  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.2);
`;

export const FormElement = styled(Form)`
  background: #fff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;
  width: 30vw;
`;
