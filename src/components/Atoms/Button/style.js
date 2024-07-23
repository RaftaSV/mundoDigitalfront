import styled from 'styled-components';

export const StyleButton = styled.button`
  border: 1px solid transparent;
  height: 45px;
  min-width: 125px;
  border-radius: 12px;
  padding: 0 20px;
  margin-top: 10px;
  cursor: pointer;
  background: ${({ theme, $color }) => theme.colors[$color]};
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    opacity: 0.8;
  }
`;
