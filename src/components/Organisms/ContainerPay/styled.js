import styled from 'styled-components';
import {mediaQueries} from 'styles/theme';


export const StyleWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  ${mediaQueries.mobile}{
    width: 100%;
    min-height: 300px;
    height: 85vh;
    gap: 20px;
  }
  ${mediaQueries.tablet}{
    width: 30%;
    height: 500px;
    gap: 20px;
  }
  ${mediaQueries.desktop}{
    width: 30%;
    height: 79vh;
  }
`;
export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height:40px;
  width: 100%;
`
export const StyledItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  height:40px;
  width: 100%;
`
export const StyledItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 10px;
  justify-content: center;
`

export const StyleWrapperCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: ${({ theme }) => theme.colors.bgCard};
  ${mediaQueries.mobile}{
    width: 100%;
    min-height: 300px;
    gap: 20px;
    height: max-content;
  }
  ${mediaQueries.tablet}{
    width: 40%;
    height: 500px;
    gap: 20px;
  }
  ${mediaQueries.desktop}{
    width: 40%;
    overflow-y: scroll;
    max-height: 63vh;
    gap: 20px;
  }
`;

export const StyleTotal = styled.div`
  background: ${({ theme }) => theme.colors.nav};
  display: flex;
  position: absolute;
  justify-content: space-between;
  padding-right: 10px;
  bottom: 10px;
  left: 2%;
  width: 96%;
  height: 60px;
  padding-left:10px;
  align-items: center;
`;
