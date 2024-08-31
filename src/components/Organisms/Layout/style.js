import styled from 'styled-components';
import {mediaQueries} from 'styles/theme';


export const StyleWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  ${mediaQueries.mobile}{
    width: 90%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  ${mediaQueries.tablet}{
    width: 90%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${mediaQueries.desktop}{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 98%;
  }`;

