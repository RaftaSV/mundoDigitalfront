import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';
import { FixedSizeGrid as Grid } from 'react-window';

export const Container = styled.div`
  ${mediaQueries.mobile} {
    width: 98%;
    justify-content: center;
    align-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 20px;
  }

  ${mediaQueries.tablet} {
    min-height: 500px;
    width: 98%;
    align-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  ${mediaQueries.desktop} {
    min-height: 500px;
    width: 98%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;
// Styled component for the grid wrapper
export const StyledGridWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden;
  justify-content: center; /* Asegura que el contenido esté centrado */
`;

// Styled component for the grid
export const StyledGrid = styled(Grid)`
  display: flex; /* Cambiado a flex para compatibilidad */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Asegura que el contenido se ajuste */

  /* Personalización de la barra de desplazamiento para WebKit (Chrome, Safari, Edge moderno) */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.input};
    border-radius: 10px;
    border: 3px solid ${({ theme }) => theme.colors.background};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #cc1111;
  }

  /* Personalización para Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.input} ${({ theme }) => theme.colors.background};
`;

// Styled component for the cell wrapper
export const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center; /* Centrar horizontalmente */
  align-items: center; /* Centrar verticalmente */
  width: 100%; /* Ajuste de ancho para coincidir con el contenedor */
  height: 100%; /* Para asegurar que el contenido esté centrado en la celda */
`;
