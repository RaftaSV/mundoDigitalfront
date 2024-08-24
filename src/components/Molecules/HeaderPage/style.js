import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';

export const StyleWrapper = styled.div`
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items:center;
  gap:20px;
  min-width: 90vw;
  height: 70px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ChildrenContainer = styled.div`
  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80px;
  }
  ${mediaQueries.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ${mediaQueries.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    width: 50%;
  }
  `;
export const ButtonReturnAndTitle = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StyleButton = styled.div`
  display: flex;
  align-items: center;
  background: ${({theme}) => theme.colors.primary};
  border: none;
  color: ${({theme}) => theme.colors.background};
  min-width: auto;
  padding: 0;
  width: 40px;
  height: 40px;
  right: 20px;
  top: 30px;
  border-radius: 60px;
  font-size: 40px;
  cursor: pointer;
  &:hover {
    background: #6f6fab;
  }
`;


