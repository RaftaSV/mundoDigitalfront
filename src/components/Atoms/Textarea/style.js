import styled from 'styled-components';
import {mediaQueries} from 'styles/theme';

export const StyleInput = styled.textarea`
 font-size: 20px;
    ${mediaQueries.mobile} {
      width:   ${({ $sizeMobile} ) => $sizeMobile}px;;
      height: 50px;
      border-radius: 10px;
      border: none;
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.input};
      border: 2px solid ${({ theme }) => theme.colors.borderInput};
    }
    ${mediaQueries.tablet} {
      width:   ${({ $sizetablet} ) => $sizetablet}px;;
      height: 50px;
      border-radius: 10px;
      border: none;
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.input};
      border: 2px solid ${({ theme }) => theme.colors.borderInput};
    }
    ${mediaQueries.desktop} {
      width:   ${({ $size} ) => $size}px;
      max-width: ${({ $size} ) => $size}px;;
      height: 50px;
      max-height: 80px;
      border-radius: 10px;
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.input};
      border: 2px solid ${({ theme }) => theme.colors.borderInput};
    }
    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${({ theme }) => theme.colors.placeholder};
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: ${({ theme }) => theme.colors.placeholder};
    }

    // Estilos para manejar el autocompletado en diferentes navegadores
    &:-webkit-autofill,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.input} inset;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
    }

    // Otros navegadores (Firefox, etc.)
   &:-moz-autofill,
    &:-moz-autofill:focus,
    &:-moz-autofill:hover,
    &:-moz-autofill:active {
      box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.input} inset;
      -moz-text-fill-color: ${({ theme }) => theme.colors.text};
    }
`;
