import styled from 'styled-components';
import Button from '../Button';

export const StyleBody = styled.div`
  position: relative;
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


export const StyleTitle = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgModal};
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
`;

export const StyleCloseBtn = styled(Button)`
  position: absolute;
  right: 0;
  top: -10px;
  min-width: auto;
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
  color:  ${({ theme }) => theme.colors.error};
  &:hover {
    background:  ${({ theme }) => theme.colors.nav};
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    right: 10px;
    top: -5px;
    min-width: auto;
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 50%;
    color:  ${({ theme }) => theme.colors.error};
    &:hover {
      background:  ${({ theme }) => theme.colors.nav};
    }  }
`;

export const customStyles = {
  display: 'flex',
  alignItems: 'center',
  overlay: {
    backdropFilter: 'saturate(100%) blur(1px)',
    zIndex: 30,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  }
};
export const StyleFooter = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  padding: 5px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bgModal};
`;
