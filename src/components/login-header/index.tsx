import { ReactElement } from 'react';

import * as S from './styles';

export function LoginHeader(): ReactElement {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <S.Pointer />
        <h1>Dynolog</h1>
      </S.LogoContainer>
      <S.NavContainer>
        <h1>Login</h1>
        <h1>Sign up</h1>
      </S.NavContainer>
    </S.HeaderContainer>
  );
}
