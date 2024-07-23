import styled from 'styled-components';
import {mediaQueries} from 'styles/theme';

export const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.bgCard};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
  ${mediaQueries.mobile} {
    width: 130px;
    height: 100px;
    margin-top: 20px;
  }
  ${mediaQueries.tablet} {
    width: 160px;
    height: 150px;
    padding: 10px;
    margin-top: 20px;

  }
  ${mediaQueries.desktop} {
    width: 200px;
    padding: 20px;
    height: 150px;
    margin-top: 20px;
  }
`;

export const StyleImage = styled.img`
 ${mediaQueries.mobile} {
   width: 60px;
   height: 60px;

 }

  ${mediaQueries.tablet} {
    width: 80px;
    height: 80px;
  }
  ${mediaQueries.desktop} {
    width: 90px;
    height: 90px;
  }
`;
