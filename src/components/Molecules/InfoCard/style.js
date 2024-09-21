
import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';


export const StyleWrapper = styled.div`
  padding: 10px;
  display: flex;
  position: relative;
  align-items: initial;
  ${mediaQueries.mobile} {
    flex-direction: column;
    background: ${({ theme }) => theme.colors.bgCard};
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    border-radius: 10px;
    width: 150px;
    height: 200px;
  }
  ${mediaQueries.tablet} {
    flex-direction: column;
    background: ${({ theme }) => theme.colors.bgCard};
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    border-radius: 10px;
    width: 270px;
    height: 150px;
  }
  ${mediaQueries.desktop} {
    flex-direction: column;
    background: ${({ theme }) => theme.colors.bgCard};
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    border-radius: 10px;
    width: 280px;
    height: 150px;
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
