import MenuNavbar from 'components/Molecules/MenuNavbar';
import {StyleNavbar, StyleImage, StyleMenuNavbar, StyleButtonBurgerAndImage} from './style';



const Navbar = () => {


  return (
    <StyleNavbar>
      <StyleButtonBurgerAndImage>
      </StyleButtonBurgerAndImage>
      <StyleMenuNavbar>
        <MenuNavbar />
      </StyleMenuNavbar>
    </StyleNavbar>
  );
};

export default Navbar;
