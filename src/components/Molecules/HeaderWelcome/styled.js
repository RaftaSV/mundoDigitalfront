import styled from 'styled-components';
import {mediaQueries} from 'styles/theme'

export const HeaderSection = styled.div`
  padding: 40px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaQueries.mobile} {
    width: 100%;
  }
  ${mediaQueries.tablet} {
    width: 80%;
  }
  ${mediaQueries.desktop} {
    width: 70%;
  }
`;

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  ${mediaQueries.mobile}{
    display: flex;
    flex-direction: column;
    height: 40vh;
    justify-content: center;
    justify-items: center;
  }
  ${mediaQueries.tablet}{
    display: flex;
    flex-direction: row;
    height: 30vh;
  }
  ${mediaQueries.desktop}{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 30vh;
  }
`
export const StyledImageContainer = styled.div`
  ${mediaQueries.mobile}{
    display: flex;
    width: 100%;
    justify-content: center;
  }
  ${mediaQueries.tablet}{
    display: flex;
    width: 20%;
  }
  ${mediaQueries.desktop}{
    display: flex;
    width: 30%;
  }
`
export const StyledImage = styled.img`
  ${mediaQueries.mobile}{
    width: 300px;
    height: 235px;
  }
  ${mediaQueries.tablet}{
    width: 350px;
    height: 275px;
  }
  ${mediaQueries.desktop}{
    display: flex;
    width: 450px;
    height: 350px;
  }
`
