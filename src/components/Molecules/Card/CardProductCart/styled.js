import styled from 'styled-components';
import Button from 'components/Atoms/Button';
import {mediaQueries} from 'styles/theme'


export const StyledCard = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.background};
  height: 60px;
  ${mediaQueries.mobile}{
    width: 350px;
  }
  ${mediaQueries.tablet}{
    width: 400px;
  }

  ${mediaQueries.desktop}{
    width: 480px;
  }

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
