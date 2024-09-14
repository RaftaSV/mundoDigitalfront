import styled from 'styled-components';

import {mediaQueries} from 'styles/theme';

export const StyledWrapperChart = styled.div `
  border: 2px solid ${({ theme }) => theme.colors.input} ;
  background: ${({theme}) => theme.colors.bgCard};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  ${mediaQueries.mobile}{
    width: 330px;
    height: 200px;
  }
  ${mediaQueries.tablet}{
    width: 370px;
    height: 200px;
  }
  ${mediaQueries.desktop}{
    width: 500px;
    height: 200px;
  }


`
