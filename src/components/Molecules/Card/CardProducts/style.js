import styled from 'styled-components';
import {mediaQueries} from 'styles/theme';

export const StyleWrapper = styled.div`
  margin-top: 20px;
  gap:10px;
  border: 2px solid ${({theme}) => theme.colors.borderInput};
  ${mediaQueries.mobile} {
    width: 260px;
    height: 150px;
    display: flex;
    border-radius: 10px;
    position: relative;
    background: ${({ theme }) => theme.colors.bgCard};
  }
  ${mediaQueries.tablet} {
    width: 330px;
    height: 155px;
    display: flex;
    border-radius: 10px;
    position: relative;
    background:${({ theme }) => theme.colors.bgCard};
  }
  ${mediaQueries.desktop} {
    width: 350px;
    height: 140px;
    display: flex;
    border-radius: 10px;
    position: relative;
    background: ${({ theme }) => theme.colors.bgCard};
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({theme}) => theme.colors.borderInput};
  font-size: 10px;
  align-content: center;
  align-items: center;
  gap: 5px;
}
`



export const StyleImage = styled.img`
  margin-left: 2px;
  display: flex;
  filter: drop-shadow(${({ theme }) => theme.colors.boxShadow});
  ${mediaQueries.mobile} {
   width: 100px;
   height: 75px;

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
  display: flex;
  align-items: center;
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
  margin-top: 10px;
  gap: 10px;
${mediaQueries.mobile} {
  width: 200px;
}${mediaQueries.tablet} {
   width: 220px;
}${mediaQueries.desktop} {
    width: 250px;
}

`;
