import styled from 'styled-components';
import Button from '../../Atoms/Button';
import {mediaQueries} from 'styles/theme';

export const StyleMenuNavbar = styled.div`
  ${mediaQueries.desktop} {
    display: flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between;
    padding: 10px;
    width: 95vw;
  }
  ${mediaQueries.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: space-between;
  }
`;

export const StyleText = styled.div`
  ${mediaQueries.desktop} {
    margin-right: 10px;
    margin-left: 10px;
  }
  ${mediaQueries.tablet} {
    margin-right: 10px;
    margin-left: 10px;
  }
  ${mediaQueries.mobile} {
    margin-right: 10px;
    margin-left: 10px;
  }
  `;

export const StyleMenuItem = styled(Button)`
  ${mediaQueries.desktop} {
    min-width: auto;
    padding: 1px 10px;
    transition: color 0.4s;
    margin-top: 0;
    &:hover {
      opacity: 41;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  ${mediaQueries.tablet} {
    min-width: auto;
    padding: 1px 10px;
    transition: color 0.3s;
    margin-top: 0;
    &:hover {
      opacity: 4;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  ${mediaQueries.mobile} {
    min-width: auto;
    padding: 1px 10px;
    transition: color 0.4s;
    margin-top: 0;
    &:hover {
      opacity: 4;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const StyleMenuItemCart = styled(Button)`
  ${mediaQueries.desktop} {
    min-width: auto;
    padding: 1px 10px;
    transition: color 0.4s;
    margin-top: 0;
    &:hover {
      opacity: 41;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  ${mediaQueries.tablet} {
    min-width: auto;
    padding: 1px 10px;
    transition: color 0.3s;
    margin-top: 0;
    &:hover {
      opacity: 4;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  ${mediaQueries.mobile} {
    min-width: auto;
    padding: 1px 10px;
    transition: color 0.4s;
    margin-top: 0;
    &:hover {
      opacity: 4;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
export const StyleLogo = styled.div`
width: max-content;
  display: flex;
`

export const StyleIcon = styled.div`
  width: max-content;
  display: flex;

`
