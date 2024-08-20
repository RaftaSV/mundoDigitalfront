import styled from 'styled-components';
import Input from 'components/Atoms/Input';
import Title from 'components/Atoms/Title';
import {mediaQueries} from 'styles/theme';

export const Form = styled.form`
 ${mediaQueries.mobile}{
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   max-height: 450px;
 }
  ${mediaQueries.tablet}{
    display: flex;
    flex-direction: column;
  }
  ${mediaQueries.desktop}{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
  }
`;
export const Container = styled.div `
  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: start;
    width: 100%;
  }
  ${mediaQueries.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: start;
   }
  ${mediaQueries.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: start;
    }
`;

export const DivRight = styled.div `
  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: start;
    width: 100%;
  }
  ${mediaQueries.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: start;
  }
  ${mediaQueries.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: start;
  }
`;

export const CheckboxContainer = styled.div `
  display: flex;
  flex-direction: row;
  `;

export const Checkbox = styled(Input)`
  width: 17px;
  padding: 0 100px;

`;

export const TITLE = styled(Title)`
  margin-left: 10px;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`
