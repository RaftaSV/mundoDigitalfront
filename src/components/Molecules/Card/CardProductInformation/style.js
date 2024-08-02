import Styled from 'styled-components';
import {mediaQueries} from 'styles/theme';


export const StyleWrapper = Styled.div`
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
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-items : center;
    align-items: center;
  }`;

export const StyleContainer = Styled.div`
  ${mediaQueries.mobile} {
    min-width: 100vw;
    min-height: 100vh;
    align-items: center;
    display:flex;
    flex-direction: column;
  }
  ${mediaQueries.tablet} {
    min-width: 95vw;
    min-height: 83vh;
    display: flex;
    flex-direction: row;
    position: relative;
  }
  ${mediaQueries.desktop} {
    min-width: 95vw;
    min-height: 83vh;
    display: flex;
    flex-direction: row;
    position: relative;

  }`;

export const StyleText = Styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 98vw;
   height: 50px;
`;

export const StyledImgContainer = Styled.div`
${mediaQueries.mobile}{
width: 100%;
height: max-content;
display:flex;
flex-direction: column;
align-items: center;
}
${mediaQueries.tablet}{
width: 31%;
height: 84vh;
display:flex;
flex-direction: column;
}
${mediaQueries.desktop}{
width: 31%;
height: 84vh;
display:flex;
flex-direction: column;
}
`

export const StyledImg = Styled.img`
${mediaQueries.mobile}{
width: 200px;
height: 200px;
border: 1px solid ${({theme})=> theme.colors.borderInput};
border-radius: 10px;
}
${mediaQueries.tablet}{
width: 300px;
height: 300px;
border: 1px solid ${({theme})=> theme.colors.borderInput};
border-radius: 10px;
}
${mediaQueries.desktop}{
width: 400px;
height: 400px;
border: 1px solid ${({theme})=> theme.colors.borderInput};
border-radius: 10px;
}
`


export const StyledInformation = Styled.div`
${mediaQueries.mobile}{
margin-top: 20px;
width: 95%;
display: flex;
flex-direction: column;
height: max-content;
padding-top: 20px;
align-items: center;
text-align: justify;
}
${mediaQueries.tablet}{
width: 70%;
height: 84vh;
padding-top: 20px;
}
${mediaQueries.desktop}{
width: 70%;
height: 84vh;
padding-top: 20px;
}
`
