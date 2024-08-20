import {StyleInput} from './style';

const Textarea = ({ placeholder, size = " 250px",sizeTablet = " 200px",sizeMobile = " 180px", ...props }) => {
  return <StyleInput
    $size = {size}
    $sizeTablet = {sizeTablet}
    $sizeMobile = {sizeMobile}
    placeholder = {placeholder}
    {...props}
  />
};

export default Textarea;
