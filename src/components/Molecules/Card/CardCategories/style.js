import styled from 'styled-components';
import {mediaQueries} from 'styles/theme';

export const StyleWrapper = styled.div`
  border: 1px solid ${({theme}) => theme.colors.borderInput};
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap:10px;
  align-items: center;
  ${mediaQueries.mobile} {
    width: 170px;
    height: 110px;
    display: flex;
    border-radius: 5px;
    position: relative;
    background: ${({ theme }) => theme.colors.bgCard};
  }
  ${mediaQueries.tablet} {
    width: 170px;
    height: 150px;
    display: flex;
    border-radius: 10px;
    position: relative;
    background: ${({ theme }) => theme.colors.bgCard};
  }
  ${mediaQueries.desktop} {
    width: 190px;
    height: 170px;
    display: flex;
    border-radius: 10px;
    position: relative;
    background: ${({ theme }) => theme.colors.bgCard};
  }
`;



export const StyleImage = styled.img`
  filter: drop-shadow(${({ theme }) => theme.colors.boxShadow});
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
