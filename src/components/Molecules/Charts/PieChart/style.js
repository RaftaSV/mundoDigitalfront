import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/theme';

export const StyledWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.input};
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: 10px;
  ${mediaQueries.mobile}{
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
  ${mediaQueries.tablet}{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 375px;
    height: 300px;
  }

  ${mediaQueries.desktop} {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 450px;
    height: 425px;
  }
`


export const StyledWrapperChart = styled.div`
  filter: drop-shadow(${({ theme }) => theme.colors.boxShadow});
  ${mediaQueries.mobile} {
    width: 200px;
    height: 200px;
  }

  ${mediaQueries.tablet} {
    width: 250px;
    height: 250px;
  }

  ${mediaQueries.desktop} {
    width: 350px;
    height: 350px;
  }
`;
