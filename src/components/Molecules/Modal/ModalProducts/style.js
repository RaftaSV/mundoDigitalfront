import styled from 'styled-components';
import {mediaQueries} from 'styles/theme';

export const Form = styled.form`

  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

  }${mediaQueries.tablet} {
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       width: 100%;
       gap: 30px;
   }
  ${mediaQueries.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 30px;

    }
`;

export const ContainerLeft = styled.div`
${mediaQueries.mobile} {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}${mediaQueries.tablet} {
   width: 50%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

}
  ${mediaQueries.desktop} {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
`;
export const ContainerRight = styled.div`
  ${mediaQueries.mobile} {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  ${mediaQueries.tablet} {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
  ${mediaQueries.desktop} {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
`;





