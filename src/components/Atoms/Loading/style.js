import styled, {keyframes} from 'styled-components';

const rotareAnimation = keyframes`
  to {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
`;

export const StyleLoading = styled.span`
  margin-right: 5px;
  font-size: 1em;

  svg {
    animation: ${rotareAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`;
