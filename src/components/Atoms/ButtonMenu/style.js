import styled from 'styled-components';
import Button from '../Button';

export const StyleWrapper = styled.div`
  display: flex;
  width: auto;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
  .active-item {
    button.btn {
      color: ${({ theme }) => theme.colors.secondary};
    }
`;

export const StyleMenuItem = styled(Button)`
  min-width: auto;
  padding: 0 10px;
  transition: color 0.3s;
  font-size: 20px;
  margin: 4px 0;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${({theme}) => theme.colors.text};
  border-radius: 0;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.secondary};
  }`;
