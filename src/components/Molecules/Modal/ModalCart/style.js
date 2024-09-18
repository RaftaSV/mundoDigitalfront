import styled from 'styled-components';

export const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
  gap: 10px;
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
`;


export const TotalPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: ${({theme}) => theme.colors.background};
`;

