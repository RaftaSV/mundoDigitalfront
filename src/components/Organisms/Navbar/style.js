import styled from 'styled-components';

export const StyleNavbar = styled.nav`
  position: sticky;
  display: flex;
  top: 1%;
  right: 0;
  align-items: center;
  border-radius: 10px;
  padding: 0 20px;
  height: 50px;
  backdrop-filter: saturate(180%) blur(10px);
  background: ${({ theme }) => theme.colors.nav};
  z-index: ${({ theme }) => theme.zIndex.nav};
  justify-content: space-between;
  width: 98%;
`;

export const  StyleImage = styled.img`
 margin-top: -1%;
  width: 100px;
  height: 40px;
  @media (min-width: 768px) {
    margin-top: -1%;
    width: 200px;
    height: 60px;
  }

`;

export const StyleMenuNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  `;
export const StyleButtonBurgerAndImage = styled.button`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.nav};
  border: none;
`;
