import {mediaQueries} from 'styles/theme';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const FeaturesSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px 20px;
  margin-top: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: 10px;
  ${mediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
  }
  ${mediaQueries.tablet} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

// Estilo de cada ícono y descripción
export const Feature = styled.div`
  text-align: center;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.Text};
  border-radius: 10px;
  cursor: pointer;
  transition:  width 0.3s ease-in-out;

  ${mediaQueries.mobile} {
    width: 300px;
    height: 150px;
  }
  ${mediaQueries.tablet} {
    width: 400px;
    height: 240px;
  }
  ${mediaQueries.desktop} {
    width: 400px;
    height: 200px;
    &:hover {
      scale: 1.1;
    }
  }
`;

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  svg {
    width: 100px;
    height: 100px;
   stroke-width: 1;
    ${mediaQueries.tablet} {
      width: 80px;
      height: 80px;
    }

    ${mediaQueries.mobile} {
      width: 60px;
      height: 60px;
    }
  }
`;

  export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover, &:focus {
    border: none;
    outline: none;
  }
`;
