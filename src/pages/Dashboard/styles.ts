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

export const Transactions = styled.div`
  margin-top: 50px;

  a {
    background: #fff;
    color: #3a3a3a;
    border-radius: 5px;
    width: 100%;
    padding: 20px;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(8px);
    }
  }
`;

export const Customer = styled.div`
  flex: 1;
  margin-left: 10px;
`;
export const Card = styled.div`
  flex: 1;
`;
export const Transaction = styled.div`
  margin-right: 20px;
  div {
    display: flex;
    align-items: center;
    div {
      & + div {
      }
    }

    span {
      width: 14px;
      height: 14px;
      background-color: #04d361;
      border-radius: 12px;
      margin-right: 20px;
    }
  }
`;
