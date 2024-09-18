import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';


export const StyleWrapper = styled.div`
    display: flex;
    ${mediaQueries.mobile}{
      width: 100%;
      height: 100%;
      flex-direction: column;
      gap: 30px;
    }
    ${mediaQueries.tablet}{
        width: 100%;
        height: 100%;
        flex-direction: row;
        justify-content: center;
        gap: 5%;
    }
    ${mediaQueries.desktop}{
        width: 100%;
        height: 100%;
        flex-direction: row;
        justify-content: center;
        gap: 5%;
    }`;
