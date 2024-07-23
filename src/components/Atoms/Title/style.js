import styled from 'styled-components';

import { mediaQueries } from 'styles/theme';

export const StyleTitle = styled.h2`
  margin-top:-10px;
  color: ${({ theme, $color }) => theme.colors[$color]};
 ${mediaQueries.mobile} {
    font-size: ${({ $size_mobile }) => $size_mobile}px;
    line-height: ${({ $lineHeight }) => $lineHeight}px;
 }
  ${mediaQueries.tablet} {
    font-size: ${({ $size }) => $size}px;
    line-height: ${({ $lineHeight }) => $lineHeight}px;
  }
  ${mediaQueries.desktop} {
    font-size: ${({ $size }) => $size}px;
    line-height: ${({ $lineHeight }) => $lineHeight}px;
  }
`;
