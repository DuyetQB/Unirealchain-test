import styled, { css } from 'styled-components';
import { Text as MainText } from 'components/common/Typo';

export const Text = styled(MainText)`
  position: relative;
  margin-left: 50px;
  color: ${({ theme }) => theme.colors.blue};
  &::before {
    position: absolute;
    content: '';
    left: -50px;
    top: 10px;
    width: 39px;
    height: 1.5px;
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const WrapTextQuestion = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 60px;
`;

export const TextQuestion = styled(MainText)`
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.mdsm};
`;

export const QuestionContent = styled.div`
  padding: 30px 0px;
`;

export const ChildText = styled.p`
  font-size: ${({ size, theme }) => theme.fontSize[size] || '16px'};
  line-height: 1.5;
  ${({ isBold, theme }) =>
    css`
      font-weight: ${isBold ? theme.fontWeight.extraBold : theme.fontWeight.bold};
    `}

  
`;
