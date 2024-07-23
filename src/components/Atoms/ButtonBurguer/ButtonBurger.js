import { TopLine, BottomLine, MiddleLine, StyleWrapper } from './style';

const ButtonBurger = ({ isOpen = false, ...props }) => {
  return (
    <StyleWrapper {...props}>
      <TopLine $isOpen={isOpen} />
      <MiddleLine $isOpen={isOpen} />
      <BottomLine $isOpen={isOpen} />
    </StyleWrapper>

);
};

export default ButtonBurger;
