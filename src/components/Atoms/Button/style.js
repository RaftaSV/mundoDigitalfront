import styled from 'styled-components';

export const StyleButton = styled.button`
  border: 1px solid transparent;
  height: 45px;
  min-width: 50px;
  border-radius: 12px;
  cursor: pointer;
  background: ${({ theme, $color }) => theme.colors[$color]};
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    opacity: 0.8;
  }
`;
