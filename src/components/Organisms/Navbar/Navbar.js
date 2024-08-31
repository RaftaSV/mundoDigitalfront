import MenuNavbar from 'components/Molecules/MenuNavbar';
import {StyleNavbar, StyleImage, StyleMenuNavbar, StyleButtonBurgerAndImage} from './style';



const Navbar = ({refresh}) => {


  return (
    <StyleNavbar>
      <StyleButtonBurgerAndImage>
      </StyleButtonBurgerAndImage>
      <StyleMenuNavbar>
        <MenuNavbar refresh={refresh}/>
      </StyleMenuNavbar>
    </StyleNavbar>
  );
};

export default Navbar;
