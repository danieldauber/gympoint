import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import { darken } from 'polished';

export const Container = styled.div`
  width: 95vw;
  margin: 40px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 24px;
      color: #444;
    }

    aside {
      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;
      }

      button {
        display: flex;
        align-items: center;

        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
        padding: 7px 12px;
        text-transform: uppercase;
        margin-left: 10px;
      }
    }
  }
`;

export const FormElement = styled(Form)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  span {
    color: red;
  }

  label {
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 15px;
    color: #444;
  }

  .select {
    div {
      border-radius: 4px;
      border: 1px solid #ccc;
      margin-bottom: 5px;

      select {
        background: none;
        border: none;
        width: 100%;
        height: 100%;
        font-size: 14px;
        color: #444;
      }
    }
  }

  input {
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 5px;

    &::placeholder {
      color: #999;
    }

    &:disabled {
      background: #f4f4f4;
    }
  }
  input[type='date'] {
    padding: 13px;
  }

  & > div.input_group {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex: 1;
      flex-direction: column;

      & + div {
        padding-left: 16px;
      }
    }
  }
`;

export const BackButton = styled.button`
  background: #ccc;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.1, '#ccc')};
  }
`;

export const SaveButton = styled.button`
  background: #ee4d64;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.1, '#ee4d64')};
  }
`;
