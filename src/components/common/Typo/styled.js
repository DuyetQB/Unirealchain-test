import styled, { css } from 'styled-components';

export const Heading2 = styled.h2`
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.black)};
  font-size: ${({ size, theme }) => theme.fontSize[size] || '40px'};
  font-weight: ${({ weight, theme }) => theme.fontWeight[weight] || 700};
  line-height: 1.5;
  letter-spacing: 1px;

  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `};

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `};
`;

export const Heading3 = styled.h3`
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.darkGrey)};
  font-size: ${({ size, theme }) => theme.fontSize[size] || theme.fontSize['lg']};
  font-weight: ${({ weight, theme }) => theme.fontWeight[weight] || theme.fontWeight.bold};
  line-height: 1.55;
  letter-spacing: 1px;

  ${({ isBold, theme }) =>
    css`
      font-weight: ${isBold ? theme.fontWeight.extraBold : theme.fontWeight.bold};
    `}

  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `};

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `};

  ${({ isBlue1 }) =>
    isBlue1 &&
    css`
      color: ${({ theme }) => theme.colors.blue};
    `}
`;
export const Text = styled.p`
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.black)};
  font-size: ${({ size, theme }) => theme.fontSize[size] || '16px'};
  line-height: 1.5;

  ${({ isBold, theme }) =>
    css`
      font-weight: ${isBold ? theme.fontWeight.extraBold : theme.fontWeight.bold};
    `}
    
  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `};

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};

  ${({ isBold, theme }) =>
    isBold &&
    css`
      font-weight: ${theme.fontWeight.bold};
    `}

  ${({ isGray }) =>
    isGray &&
    css`
      color: ${({ theme }) => theme.colors.gray4};
    `}

    ${({ isBlue1 }) =>
    isBlue1 &&
    css`
      color: ${({ theme }) => theme.colors.blue};
    `}


  ${({ isBlue }) =>
    isBlue &&
    css`
      color: ${({ theme }) => theme.colors.blue2};
    `}

  ${({ isWhite }) =>
    isWhite &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
  
  ${({ isError }) =>
    isError &&
    css`
      color: ${({ theme }) => theme.colors.redError};
    `}

  ${({ isOneLine }) =>
    isOneLine &&
    css`
      white-space: nowrap;
    `}

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `};
`;
