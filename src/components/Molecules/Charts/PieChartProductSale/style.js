import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/theme';

export const StyledWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.input};
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: 10px;
  ${mediaQueries.mobile}{
    width: 175px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap : 5px;
  }
  ${mediaQueries.tablet}{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 200px;
    height: 225px;
  }

  ${mediaQueries.desktop} {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 300px;
    height: 335px;
  }
`


export const StyledWrapperChart = styled.div`
  filter: drop-shadow(${({ theme }) => theme.colors.boxShadow});
  ${mediaQueries.mobile} {
    width: 150px;
    height: 150px;
  }

  ${mediaQueries.tablet} {
    width: 200px;
    height: 200px;
  }

  ${mediaQueries.desktop} {
    width: 250px;
    height: 250px;
  }
`;
