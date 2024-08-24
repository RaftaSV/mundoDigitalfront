import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const StyleWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: max-content;
  bottom:0;
  right:0;
  gap:10px;
`;


export const StyleButtonEdit = styled(Button)`
  cursor: pointer;
  display: flex;
  background:${({ theme }) => theme.colors.success};
  color:${({ theme }) => theme.colors.white};
  min-width: 40px;
  padding: 0;
  width:40px;
  height: 40px;
  border-radius: 50px;
  font-size: 25px;
  justify-content: center;

`;

export const StyleButtonDelete = styled(Button)`
    cursor: pointer;
    display: flex;
    background:${({ theme }) => theme.colors.error};
    color:${({ theme }) => theme.colors.white};
    min-width: 40px;
    padding: 0;
    width:40px;
    height: 40px;
    border-radius: 50px;
    font-size: 37px;
`;

export const StyleButtonSend = styled(Button)`
    cursor: pointer;
    display: flex;
    background:${({ theme }) => theme.colors.primary};
    color:${({ theme }) => theme.colors.white};
    min-width: 40px;
    padding: 0;
    width:40px;
    height: 40px;
    border-radius: 50px;
    font-size: 25px;
  //center
  justify-content: center;
  align-items: center;
`;
