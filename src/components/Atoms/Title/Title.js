import { StyleTitle } from './style';

const Title = ({ children, htmlTag = 'h2', color = 'text', size = 35, lineHeight = size + 18
                 , size_mobile=15, ...restProps }) => {
  return (
    <StyleTitle as={htmlTag}
                $size={size}
                $color={color}
                $lineHeight={lineHeight}
                $size_mobile={size_mobile}
                {...restProps}>
      {children}
    </StyleTitle>
  );
};

export default Title;
