import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 42px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
  }

  a {
    padding: 6px 30px;
    color: #fff;
    background: #4169e1;
    border-radius: 6px;
    border: 0;

    &:hover {
      background: ${shade(0.2, '#4169e1')};
    }
  }
`;

export const Container = styled.div`
  margin-top: 40px;
  display: flex;

  form {
    display: flex;
  }
`;

export const CardInfo = styled.div`
  width: 450px;
  margin-left: 40px;

  display: flex;
  flex-direction: column;

  input {
    padding: 8px;
    border-radius: 4px;
    border: 0;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-direction: row;

    input {
      flex: 1;

      & + input {
        margin-left: 10px;
      }
    }
  }

  span {
    align-self: flex-end;

    button {
      padding: 8px 50px;
      color: #fff;
      background: #4169e1;
      border-radius: 6px;
      border: 0;

      &:hover {
        background: ${shade(0.2, '#4169e1')};
      }
    }
  }
`;

export const CustomerInfo = styled.div`
  width: 450px;
  margin-left: 40px;

  display: flex;
  flex-direction: column;

  input {
    padding: 8px;
    border-radius: 4px;
    border: 0;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-direction: row;

    input {
      flex: 1;
      & + input {
        margin-left: 10px;
      }
    }
  }

  span {
    align-self: flex-end;

    button {
      padding: 8px 50px;
      color: #fff;
      background: #4169e1;
      border-radius: 6px;
      border: 0;

      &:hover {
        background: ${shade(0.2, '#4169e1')};
      }
    }
  }
`;

/* div {
      display: flex;

      & + div {
        margin-top: 10px;
      }

      input {
        flex: 1;
        padding: 8px;
        border-radius: 4px;
        border: 0;

        & + input {
          margin-left: 10px;
        }
      }

      button {
        padding: 8px 50px;
        color: #fff;
        background: #4169e1;
        border-radius: 6px;
        border: 0;

        &:hover {
          background: ${shade(0.2, '#4169e1')};
        }
      }
    } */
//   }
// `;
