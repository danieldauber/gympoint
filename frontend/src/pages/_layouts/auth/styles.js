import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  background: linear-gradient(-90deg, #ee4d64, #ee4d64);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;
  background: #fff;
  padding: 60px 30px;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      text-align: left;
      text-transform: uppercase;
      padding: 2px 0 5px;
      margin: 15px 0 0px;
    }

    input {
      background: rgba(255, 255, 255, 1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #999;

      border: 1px solid #dddddd;

      &::placeholder {
        color: rgba(0, 0, 0, 0.2);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 5px 0 10px;
      font-weight: bold;
    }

    button {
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      margin: 15px 0 0px;

      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
