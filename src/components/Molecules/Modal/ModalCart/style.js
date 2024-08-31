import styled from 'styled-components';
import Button from 'components/Atoms/Button';
export const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 240px;
  gap: 10px;
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
