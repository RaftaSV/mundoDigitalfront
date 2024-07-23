import styled from 'styled-components';

export const StyleWrapper = styled.div`
  width: 40px;
  height: 30px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  width: 70%;
  height: 4px;
  background: ${({ theme }) => theme.colors.text};
  transition: transform 150ms, opacity 150ms;
`;

export const TopLine = styled(Line)`
  top: 13%;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(40deg) translate(12px, 2px)' : 'none')};
`;

export const MiddleLine = styled(Line)`
  top: 50%;
  transform: translateY(-50%) ${({ $isOpen }) => ($isOpen ? 'scale(0)' : 'scale(1)')};
`;

export const BottomLine = styled(Line)`
  top: 75%;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-40deg) translate(12px, -2px)' : 'none')};
`;
