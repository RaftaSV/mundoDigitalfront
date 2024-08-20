import styled from 'styled-components';
import {mediaQueries} from 'styles/theme';

export const StyleWrapper = styled.div`
  border: 2px solid ${({theme}) => theme.colors.borderInput};
  margin-top: 20px;
  gap:10px;
  ${mediaQueries.mobile} {
    width: 20rn 0px;
    height: 110px;
    display: flex;
    border-radius: 10px;
    position: relative;
    background: ${({ theme }) => theme.colors.bgCard};
  }
  ${mediaQueries.tablet} {
    width: 250px;
    height: 110px;
    display: flex;
    border-radius: 10px;
    position: relative;
    background: ${({ theme }) => theme.colors.bgCard};
  }
  ${mediaQueries.desktop} {
    width: 270px;
    height: 110px;
    display: flex;
    border-radius: 10px;
    position: relative;
    background: ${({ theme }) => theme.colors.bgCard};
  }
`;



export const StyleImage = styled.img`
 ${mediaQueries.mobile} {
   width: 80px;
   height: 75px;

 }

  ${mediaQueries.tablet} {
    width: 95px;
    height: 90px;
  }
  ${mediaQueries.desktop} {
    width: 100px;
    height: 90px;
  }
`;
