import {StyleInput} from './style';
const Input = ({ placeholder, refProp,size = " 250px",sizeTablet = " 200px",sizeMobile = " 180px", ...props }) => {
  return (
    <StyleInput
      $size = {size}
      $sizeTablet = {sizeTablet}
      $sizeMobile = {sizeMobile}
      placeholder={placeholder}
      ref={refProp}
      {...props}
    />
  );
};

export default Input;
