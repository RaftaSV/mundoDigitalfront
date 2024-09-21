
import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';


export const StyleWrapper = styled.div`
  position: relative;
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

export const StyleIcon = styled.div`
  display: flex;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  color: ${({ theme, $color }) => theme.colors[$color]};
`


