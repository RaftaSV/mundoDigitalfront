import styled from 'styled-components';

export const StyleBody = styled.div`
  position: relative;
  width: 375px;
  min-width: 200px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.bgModal};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.modal} ;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    min-width: 200px;
    width: ${({ $width }) => $width}px;
    justify-content: space-between;
    overflow: hidden;
  }
`;


export const customStyles = {
  content: {
    top: '50px',
    left: 'auto',
    right: '5px',
    bottom: 'auto',
    marginLeft: '0',
    marginRight: '0',
    padding: 0,

  }
};
