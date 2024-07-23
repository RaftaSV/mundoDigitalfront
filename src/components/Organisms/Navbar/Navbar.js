import MenuNavbar from 'components/Molecules/MenuNavbar';
import {StyleNavbar, StyleImage, StyleMenuNavbar, StyleButtonBurgerAndImage} from './style';
import {ROUTES} from 'config';
import { useAuth } from 'context/AuthContextCookie';
import {useState} from 'react';
import {  useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation().pathname;
  const isLoginPage = location === ROUTES.LOGIN.absolutePath;
  const isPrimaryPage = location === ROUTES.HOME.absolutePath;
  const {  getCookies } = useAuth();
  const authToken = getCookies('auth-token');
  const [login] = useState(isLoginPage);
  const [primary] = useState(isPrimaryPage);
 
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
