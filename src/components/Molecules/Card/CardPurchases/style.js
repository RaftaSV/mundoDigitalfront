import styled from 'styled-components'
import {mediaQueries} from 'styles/theme';

export const StyleWrapper = styled.div`
  background: rgba(12,12,12,0.56);
  margin-top: 10px;
  ${mediaQueries.mobile}{
    width: 100%;
    height: 50px;
  }
  ${mediaQueries.tablet}{
    width: 100%;
    height: 50px;
  }
  ${mediaQueries.desktop}{
    width: 100%;
    height: 50px;
  }

`;
export const StyleImage = styled.img`
  ${mediaQueries.mobile}{
    width: 100%;
    height: 50px;
  }
  ${mediaQueries.tablet}{
    width: 100%;
    height: 50px;
  }
  ${mediaQueries.desktop}{
    width: 100%;
    height: 50px;
  }

`;
