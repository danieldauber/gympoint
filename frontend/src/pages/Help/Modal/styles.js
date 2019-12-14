import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import { darken } from 'polished';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${props => (props.display === 'true' ? 'flex' : 'none')};

  flex: 1;

  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.2);
`;

export const FormElement = styled(Form)`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  width: 40vw;

  display: flex;
  flex-direction: column;

  p {
    color: #666;
    font-size: 16px;
    line-height: 1.8em;
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
    margin-top: 15px;
    color: #444;
    font-size: 14px;
  }

  h3 {
    font-weight: bold;
    margin-bottom: 5px;
    margin-top: 0px;
  }

  span {
    color: red;
    margin-bottom: 5px;
  }

  textarea {
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 15px;
    margin: 5px 0 10px;

    color: #666;
    font-size: 14px;
    line-height: 1.8em;

    &::placeholder {
      color: #999;
    }

    &:disabled {
      background: #f4f4f4;
    }
  }
`;

export const Close = styled.button`
  background: none;
  font-size: 13px;
  padding: 0px;
  border: 0;
  margin: 0;
  display: absolute;
  right: 0;
  top: 0;
`;

export const Submit = styled.button`
  background: #ee4d64;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 12px;
  border: 0;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#ee4d64')};
  }
`;
