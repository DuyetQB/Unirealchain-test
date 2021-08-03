import React from 'react';

import * as S from './styled';

function AppLayout({ children }) {
  return (
    <div className="container">
      <S.Wrapper>
        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </div>
  );
}

export default AppLayout;
