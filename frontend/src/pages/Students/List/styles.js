import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
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

      a {
        display: flex;
        align-items: center;

        background: #ee4d64;
        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
        padding: 7px 12px;
        text-transform: uppercase;
      }

      div {
        display: flex;
        align-items: center;
        background: #fff;
        border: 1px solid #dddddd;
        margin-left: 15px;
        border-radius: 4px;
        width: 215px;
        padding: 7px 12px;

        input {
          border: 0;
          width: 100%;

          &::placeholder {
            color: #999;
          }
        }
      }
    }
  }
`;

export const TableContainer = styled.div`
  background: #fff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 16px;
      color: #444444;
      text-align: left;

      td:nth-child(3) {
        text-align: center;
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid #eee;
        &:last-child {
          border-bottom: 0;
        }
        td:nth-child(3) {
          text-align: center;
        }
      }

      tr {
        td {
          padding: 20px 0;
          color: #666;
        }

        td:last-child {
          display: flex;
          justify-content: space-around;
        }
      }
    }
  }
`;

export const ButtonDelete = styled.button`
  font-size: 15px;
  color: #de3b3b;
  padding: 5px;
  text-align: right;
  background: 0;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonEdit = styled.button`
  font-size: 15px;
  color: #4d85ee;
  padding: 5px;
  text-align: right;
  background: 0;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;
