import styled from 'styled-components';
import {mediaQueries} from 'styles/theme';

export const StyleDate = styled.input`
 ${mediaQueries.mobile} {
      width: 180px;
      height: 30px;
      border-radius: 7px;
      padding: 0 10px;
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.input};
      border: 2px solid ${({ theme }) => theme.colors.borderInput};
    }
    ${mediaQueries.tablet} {
      width: 200px;
      height: 30px;
      border-radius: 7px;
      padding: 0 10px;
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.input};
      border: 2px solid ${({ theme }) => theme.colors.borderInput};
    }
    ${mediaQueries.desktop} {
      width: 250px;
      height: 30px;
      border-radius: 7px;
      padding: 0 10px;
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.input};
      border: 2px solid ${({ theme }) => theme.colors.borderInput};
    }
`;
 export const StyleWrapper = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
   @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   }
 `;
