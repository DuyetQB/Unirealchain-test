import styled, { css } from 'styled-components';
import { media} from 'styles/breakpoints';
export const WrapCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  height: 300px;
  transition: all 0.4s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.grayBox};

    transform: scale(1.1);
  }
  ${media.phone`
  
  margin-top:30px;
  `}

  ${({ $bg }) =>
    css`
      background: url(${$bg});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    `}
`;

export const CardIcon = styled.img``;
