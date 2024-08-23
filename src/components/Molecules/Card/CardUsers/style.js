import styled from 'styled-components';
import {mediaQueries} from 'styles/theme';


export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;`;


export const StyleWrapper = styled.div`
  ${mediaQueries.mobile}{
    position: relative;
    display: flex;
    background-color: ${({ theme }) => theme.colors.bgCard};
    border-radius: 16px;
    margin-top: 20px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.borderInput};
    width: 300px;
    height: 230px;

  }
  ${mediaQueries.tablet}{
    position: relative;
    display: flex;
    background-color: ${({ theme }) => theme.colors.bgCard};
    border-radius: 16px;
    margin-top: 40px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.borderInput};
    width: 300px;
    height: 250px;

  }
  ${mediaQueries.desktop}{
    position: relative;
    display: flex;
    background-color: ${({ theme }) => theme.colors.bgCard};
    border-radius: 16px;
    margin-top: 40px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.borderInput};
    width: 300px;
    height: 290px;

  }
`;
