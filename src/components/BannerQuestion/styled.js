import styled from 'styled-components';
import { media } from 'styles/breakpoints';
export const WrapIconArrow = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  right: 30px;
  ${media.phone`
    right:20px;

 `}
`;

export const WrapText = styled.div`
  position: relative;

  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.boxShadow.boxWrapper};
  padding: 35.1px 30px;
  margin-top: 10px;
  ${media.phone`
 padding: 35.1px 10px;

 `}

  & .run {
    transform: rotate(0deg);
    transition: transform 0.4s ease-in-out;
  }
  & .notrun {
    transition: transform 0.4s ease-in-out;
    transform: rotate(180deg);
  }
`;

export const WrapTextChild = styled.div``;

export const BoxTextContent = styled.div`
  padding: 30px 0px 0px 0px;
  transition: all 0.4s ease-in-out;
  & p {
    user-select: none;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.gray0};
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`;
