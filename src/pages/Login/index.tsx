import { ReactElement } from 'react';

import { Container, LoginContainer } from './styles';

import { LoginHeader } from '../../components/login-header';

export function Login(): ReactElement {
  return (
    <Container>
      <LoginHeader />
      Hello world!
    </Container>
  );
}
