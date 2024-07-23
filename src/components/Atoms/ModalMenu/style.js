import styled, { keyframes } from 'styled-components';

// Define the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyleBody = styled.div`
  position: relative;
  width: auto;
  height: max-content;
  background-color: ${({ theme }) => theme.colors.bgModal};
  display: flex;
  flex-direction: column;
  align-content: center;
  z-index: ${({ theme }) => theme.zIndex.max};
  animation: ${fadeIn} 0.5s ease-in-out; // Apply the animation
`;

export const customStyles = {
  overlay: {
    backdropFilter: 'saturate(180%) blur()'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    background: `${({ theme }) => theme.colors.background}`,
  }
};
