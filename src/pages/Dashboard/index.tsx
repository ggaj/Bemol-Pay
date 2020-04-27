import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiPlus } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, Transactions, Customer, Card, Transaction } from './styles';

interface Transaction {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Header>
        <h1>Pagamento Bemol</h1>
        <Link to="cards">
          <FiPlus size={40} />
        </Link>
      </Header>
      <Transactions>
        {/* {transactions.map((repository) => ( */}
        <a href="cards">
          <Customer>
            <div>
              <strong>Cliente: </strong>
              Gildo Gomes de Araujo Junior
            </div>
            <div>BF-910282-019029 - 24.02.2020 20:00:00</div>
          </Customer>
          <Card>
            <div>Visa - 928464******9374</div>
            <div>
              R$ 1.292,09
              <strong> - Parcelas: </strong>
              4x
            </div>
          </Card>
          <Transaction>
            <div>
              <strong>Braspag Id: </strong>
              92846493-D09D-4EDE-8B3A-1231ASD8
            </div>
            <div>
              <span> </span>
              Pago
            </div>
          </Transaction>
          <FiChevronRight size={20} />
        </a>
        <a href="cards">
          <Customer>
            <div>
              <strong>Cliente: </strong>
              Gildo Gomes de Araujo Junior
            </div>
            <div>BF-910282-019029 - 24.02.2020 20:00:00</div>
          </Customer>
          <Card>
            <div>Visa - 928464******9374</div>
            <div>
              R$ 1.292,09
              <strong> - Parcelas: </strong>
              4x
            </div>
          </Card>
          <Transaction>
            <div>
              <strong>Braspag Id: </strong>
              92846493-D09D-4EDE-8B3A-1231ASD8
            </div>
            <div>
              <span> </span>
              Pago
            </div>
          </Transaction>
          <FiChevronRight size={20} />
        </a>
        <a href="cards">
          <Customer>
            <div>
              <strong>Cliente: </strong>
              Gildo Gomes de Araujo Junior
            </div>
            <div>BF-910282-019029 - 24.02.2020 20:00:00</div>
          </Customer>
          <Card>
            <div>Visa - 928464******9374</div>
            <div>
              R$ 1.292,09
              <strong> - Parcelas: </strong>
              4x
            </div>
          </Card>
          <Transaction>
            <div>
              <strong>Braspag Id: </strong>
              92846493-D09D-4EDE-8B3A-1231ASD8
            </div>
            <div>
              <span> </span>
              Pago
            </div>
          </Transaction>
          <FiChevronRight size={20} />
        </a>
        <a href="cards">
          <Customer>
            <div>
              <strong>Cliente: </strong>
              Gildo Gomes de Araujo Junior
            </div>
            <div>BF-910282-019029 - 24.02.2020 20:00:00</div>
          </Customer>
          <Card>
            <div>Visa - 928464******9374</div>
            <div>
              R$ 1.292,09
              <strong> - Parcelas: </strong>
              4x
            </div>
          </Card>
          <Transaction>
            <div>
              <strong>Braspag Id: </strong>
              92846493-D09D-4EDE-8B3A-1231ASD8
            </div>
            <div>
              <span> </span>
              Pago
            </div>
          </Transaction>
          <FiChevronRight size={20} />
        </a>

        {/* ))} */}
      </Transactions>
    </>
  );
};

export default Dashboard;
