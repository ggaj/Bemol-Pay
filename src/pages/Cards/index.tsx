import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import NumberFormat from 'react-number-format';
// import CurrencyInput from 'react-currency-input';
import Card from '../../Components/Card';

import logoImg from '../../assets/logo.svg';

import { Header, Container, CardInfo, CustomerInfo } from './styles';

const Repository: React.FC = () => {
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [focused, setFocused] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const [valor, setValor] = useState('0');

  // function priceTO(valor1: number): void {
  //   console.log(valor1);
  //   // const a = new Intl.NumberFormat('pt-BR', {
  //   //   style: 'currency',
  //   //   currency: 'BRL',
  //   // }).format(Number(valor1)),
  //   setValor([
  //     ...valor,
  //     new Intl.NumberFormat('pt-BR', {
  //       style: 'currency',
  //       currency: 'BRL',
  //     }).format(Number(valor1)),
  //   ]);
  // }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Header>
        <h1>Transação com Cartão</h1>
        {/* <Link to="cards">
          <FiPlus size={40} />
        </Link> */}
      </Header>
      <Container>
        <Card
          cvc={cvc}
          expiry={expiry}
          name={name}
          number={number}
          focused={focused}
          placeholders={{ name: 'Nome do Cartão' }}
        />
        <form>
          <CardInfo>
            <InputMask
              mask="9999 9999 9999 9999"
              maskChar={null}
              value={number}
              onFocus={(e) => setFocused(e.target.name)}
              onChange={(e) => setNumber(e.target.value)}
            >
              {() => (
                <input
                  type="tel"
                  name="number"
                  autoComplete="off"
                  placeholder="Número do Cartão"
                />
              )}
            </InputMask>
            <input
              name="name"
              type="text"
              autoComplete="off"
              placeholder="Nome do Titular do Cartão"
              maxLength={30}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocused(e.target.name)}
            />
            <div>
              <InputMask
                mask="99/99"
                maskChar={null}
                value={expiry}
                onFocus={(e) => setFocused(e.target.name)}
                onChange={(e) => setExpiry(e.target.value)}
              >
                {() => (
                  <input
                    type="tel"
                    autoComplete="off"
                    name="expiry"
                    placeholder="Validade do Cartão"
                  />
                )}
              </InputMask>
              <input
                name="cvc"
                autoComplete="off"
                maxLength={4}
                placeholder="CVC"
                onChange={(e) => setCvc(e.target.value)}
                onFocus={(e) => setFocused(e.target.name)}
              />
            </div>
          </CardInfo>
          <CustomerInfo>
            <InputMask mask="999.999.999-99" maskChar={null}>
              {() => (
                <input
                  type="tel"
                  autoComplete="off"
                  name="cpf"
                  placeholder="CPF"
                />
              )}
            </InputMask>
            <input
              name="customer"
              autoComplete="off"
              placeholder="Nome"
              // onChange={(e) => setNumber(e.target.value)}
            />
            <div>
              {/* <NumberFormat
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
              /> */}
              {/* <Currency
                quantity={45685} // Required
                currency="USD" // Optional (USD by default)
                pattern="##,### !" // Optional
                decimal="," // Optional
                group="."
              /> */}
              {/* <CurrencyInput prefix="$" /> */}
              {/* <input
                value={valor}
                type="number"
                name="totalValue"
                autoComplete="off"
                placeholder="Valor Total"
                onChange={(e) => priceTO(Number(e.target.value))}
              /> */}
              <input
                name="installments"
                autoComplete="off"
                placeholder="Parcelas"
                maxLength={2}
                max={12}
                // onChange={(e) => setCvc(e.target.value)}
                // onFocus={(e) => setFocused(e.target.name)}
              />
            </div>
            <span>
              <button type="submit">Enviar</button>
            </span>
          </CustomerInfo>
        </form>
      </Container>
    </>
  );
};

export default Repository;
