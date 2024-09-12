import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const StyleWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: max-content;
  bottom:0;
  right:0;
`;


export const StyleButtonEdit = styled(Button)`
  cursor: pointer;
  display: flex;
  background: ${({ theme }) => theme.colors.transparent};
  color:${({ theme }) => theme.colors.success};
  min-width: 40px;
  padding: 0;
  width:40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;

export const StyleButtonDelete = styled(Button)`
  cursor: pointer;
  display: flex;
  background: ${({ theme }) => theme.colors.overlay};
  color:${({ theme }) => theme.colors.error};
  min-width: 40px;
  padding: 0;
  width:40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;

export const StyleButtonSend = styled(Button)`
    cursor: pointer;
    display: flex;
    background:${({ theme }) => theme.colors.overlay};
    color:${({ theme }) => theme.colors.white};
    min-width: 40px;
    padding: 0;
    width:40px;
    height: 40px;
    font-size: 25px;
  //center
  justify-content: center;
  align-items: center;
`;
