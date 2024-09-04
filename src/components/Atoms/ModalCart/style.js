import styled from 'styled-components';
import {mediaQueries} from 'styles/theme';
export const StyleBody = styled.div`
  ${mediaQueries.mobile} {
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
  }

  ${mediaQueries.tablet} {
    min-width: 200px;
    width: ${({ $width }) => $width}px;
    height: 400px;
    justify-content: space-between;
    overflow: hidden;
  }

  ${mediaQueries.desktop} {
    min-width: 200px;
    width: ${({ $width }) => $width}px;
    height: 400px;
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
