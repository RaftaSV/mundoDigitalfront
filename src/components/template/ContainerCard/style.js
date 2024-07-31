import styled from 'styled-components';
import { mediaQueries } from '../../../styles/theme';

export const Container = styled.div`
  gap: 20px;
  ${mediaQueries.mobile} {
    width: 98%;
    justify-content: center;
    align-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${({ $widthMobile }) => $widthMobile}px, 0px));

  }

  ${mediaQueries.tablet} {
    min-height: 300px;
    width: 98%;
    align-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${({ $widthTablet }) => $widthTablet}px, 0px));
  }

  ${mediaQueries.desktop} {
    min-height: 1vh;
    max-height: 95vh;
    width: 98%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${({ $widthDesktop }) => $widthDesktop}px, 0px));
    gap: 20px;
    justify-content: center;
    overflow-y: auto;

    /* Personalización de la barra de desplazamiento para WebKit (Chrome, Safari, Edge moderno) */
    &::-webkit-scrollbar {
      width: 12px; /* Ancho de la barra de desplazamiento */
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.background}; /* Color del track (fondo) */
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.input}; /* Color del pulgar (scroll) */
      border-radius: 10px; /* Redondeo de los bordes del pulgar */
      border: 3px solid ${({ theme }) => theme.colors.background}; /* Espacio entre el pulgar y el track */
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555; /* Color del pulgar en hover */
    }
  }

  /* Personalización para Firefox */
  scrollbar-width: thin; /* Ancho de la barra de desplazamiento */
  scrollbar-color: ${({ theme }) => theme.colors.input} ${({ theme }) => theme.colors.background}; /* Color del pulgar y del track */
`;
