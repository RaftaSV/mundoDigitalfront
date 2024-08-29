import styled from 'styled-components';
import {mediaQueries} from 'styles/theme';


export const StyleWrapper = styled.div`
 margin-top:10px;
  ${mediaQueries.mobile} {
    min-width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-items : center;
    align-items: center;
  }
  ${mediaQueries.tablet} {
    min-width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-items : center;
    align-items: center;
  }
  ${mediaQueries.desktop} {
    min-width: 100%;
    height: 85vh;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-items : center;
    align-items: center;
  }`;

export const StyleContainer = styled.div`
  ${mediaQueries.mobile} {
    min-width: 100vw;
    min-height: 100vh;
    align-items: center;
    display:flex;
    flex-direction: column;
  }
  ${mediaQueries.tablet} {
    min-width: 90vw;
    min-height: 83vh;
    display: flex;
    flex-direction: row;
    gap:50px;
  }
  ${mediaQueries.desktop} {
    min-width: 95vw;
    min-height: 83vh;
    display: flex;
    flex-direction: row;
  }`;

export const StyleText = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 98vw;
   height: 50px;
`;

export const StyledImgContainer = styled.div`
${mediaQueries.mobile}{
  width: 100%;
  height: max-content;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap:20px;
}
${mediaQueries.tablet}{
  width: 31%;
  height: 84vh;
  display:flex;
  flex-direction: column;
  gap:20px;
}
${mediaQueries.desktop}{
  width: 31%;
  height: 84vh;
  display:flex;
  flex-direction: column;
  gap:20px;
}
`

export const StyledImg = styled.img`
  filter: drop-shadow(${({ theme }) => theme.colors.boxShadow});
${mediaQueries.mobile}{
  width: 230px;
  height: 200px;
  border: 1px solid ${({theme})=> theme.colors.borderInput};
  border-radius: 10px;
}
${mediaQueries.tablet}{
  width: 300px;
  height: 250px;
  border: 1px solid ${({theme})=> theme.colors.borderInput};
  border-radius: 10px;
}
${mediaQueries.desktop}{
  width: 400px;
  height: 300px;
  border: 1px solid ${({theme})=> theme.colors.borderInput};
  border-radius: 10px;
}
`


export const StyledInformation = styled.div`
${mediaQueries.mobile}{
  margin-top: 40px;
  width: 70%;
  display: flex;
  flex-direction: column;
  height: max-content;
  padding-top: 20px;
  align-items: center;
  text-align: justify;
  gap:20px;
}
${mediaQueries.tablet}{
  width: 70%;
  display: flex;
  flex-direction: column;
  height: 84vh;
  padding-top: 20px;
  gap:20px;
}
${mediaQueries.desktop}{
  width: 70%;
  display: flex;
  flex-direction: column;
  height: 84vh;
  margin-top:30px;
  gap:20px;
}
`
