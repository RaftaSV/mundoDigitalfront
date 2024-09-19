
import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';


export const StyleWrapper = styled.div`
  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.bgCard};
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    border-radius: 10px;
    width: 130px;
    height: 80px;
  }
  ${mediaQueries.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.bgCard};
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    border-radius: 10px;
    width: 180px;
    height: 80px;
  }
  ${mediaQueries.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.bgCard};
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    border-radius: 10px;
    width: 200px;
    height: 80px;
  }
`;

