import styled from 'styled-components';
import {mediaQueries} from 'styles/theme';

export const StyleWrapper = styled.div`
  margin-top: 20px;
  gap:10px;
  border: 2px solid ${({theme}) => theme.colors.borderInput};
  ${mediaQueries.mobile} {
    width: 300px;
    height: 130px;
    display: flex;
    border-radius: 10px;
    position: relative;
    background: ${({ theme }) => theme.colors.bgCard};
  }
  ${mediaQueries.tablet} {
    width: 370px;
    height: 130px;
    display: flex;
    border-radius: 10px;
    position: relative;
    background:${({ theme }) => theme.colors.bgCard};
  }
  ${mediaQueries.desktop} {
    width: 400px;
    height: 130px;
    display: flex;
    border-radius: 10px;
    position: relative;
    background: ${({ theme }) => theme.colors.bgCard};
  }
`;



export const StyleImage = styled.img`
  margin-top: 2px;
  margin-left: 2px;
  ${mediaQueries.mobile} {
   width: 100px;
   height: 85px;

 }
  ${mediaQueries.tablet} {
    width: 130px;
    height: 110px;
  }
  ${mediaQueries.desktop} {
    width: 150px;
    height: 120px;
  }
`;

export const StyleImageContainer = styled.div`
 ${mediaQueries.mobile} {
   width: 100px;
   height: 100%;

 }
  ${mediaQueries.tablet} {
    width: 130px;
    height: 100%;
  }
  ${mediaQueries.desktop} {
    width: 150px;
    height: 100%;
  }
`;

export const StyleTextInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
${mediaQueries.mobile} {
  width: 200px;
}${mediaQueries.tablet} {
   width: 220px;
}${mediaQueries.desktop} {
    width: 250px;
}

`;
