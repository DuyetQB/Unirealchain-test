import React from 'react';
import * as S from './styled';

function Card({ $bg, $src ,children}) {
  return (
    <>
      <S.WrapCard $bg={$bg}  >
        <S.CardIcon src={$src}/>
        {children}
      </S.WrapCard>
      
    </>
  );
}

export default Card;
