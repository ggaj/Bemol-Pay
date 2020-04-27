import React from 'react';
import Cards from 'react-credit-cards';

import { Container } from './styles';

export default (props: any) => (
  <Container>
    <Cards {...props} />
  </Container>
);
