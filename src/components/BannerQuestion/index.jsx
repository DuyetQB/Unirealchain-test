import React, { useState } from 'react';
import * as S from './styled';
import { ReactComponent as IconArrow } from './assets/arrow.svg';

function index({ children, ...rest }) {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }
  const textStyle = {
    color: open ? '#557ef8 ' : '#000',
    display: 'flex',
    alignItems: 'center',
  };
  return (
    <>
      <S.WrapText {...rest}>
        <S.WrapTextChild style={textStyle}>
          {children}
          <S.WrapIconArrow onClick={handleToggle} className={open ? 'notrun' : 'run'}>
            <IconArrow />
          </S.WrapIconArrow>
        </S.WrapTextChild>

        {open && (
          <S.BoxTextContent>
            <p>
              Scorum’s economic model is based on three independent revenue s Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Soluta alias excepturi nam distinctio cupiditate, officia recusandae sit vitae amet
              totam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis repudiandae magni accusamus debitis
              ut perferendis delectus veritatis quae non ex consequatur, esse quos inventore eos quam molestias commodi
              culpa provident incidunt! Reiciendis expedita error hic sed mollitia molestias incidunt exercitationem.
            </p>
          </S.BoxTextContent>
        )}
      </S.WrapText>
    </>
  );
}

export default index;
