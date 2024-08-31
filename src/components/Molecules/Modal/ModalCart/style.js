import styled from 'styled-components';
import Button from 'components/Atoms/Button';
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

export const StyledCard = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.bgCard};
  width: 100%;
  height: 60px;
  align-items: center;
  gap: 10px;
`

export const StyledImg = styled.img`
  display: flex;
  width: 80px;
  height: 60px;
  align-items: center;
  filter: drop-shadow(${({ theme }) => theme.colors.boxShadow});
`


export const StyledText = styled.div`
  width: 170px;
  height: 100%;
  display: flex;
  align-items: center;
`
export const StyledPrice = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
`

export const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.colors.transparent};
`
