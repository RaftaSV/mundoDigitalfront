import { useAppTheme } from 'context/AppTheme';
import SunFilled from 'components/Atoms/Icons/SunFilled';
import MoonFilled from 'components/Atoms/Icons/MoonFilled';
import Exit from 'components/Atoms/Icons/Exit';
import Login from 'components/Atoms/Icons/Login';
import {Img, StyleIcon, StyleLogo, StyleMenuItem, StyleMenuItemCart, StyleMenuNavbar, StyleText} from './styled';
import { useAuth } from 'context/AuthContextCookie';
import {ROUTES} from 'config';
import Title from 'components/Atoms/Title';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import useTokenInformation from 'hooks/useTokenInformation';
import CartShowCount from '../CartShowCount';
import {useCart} from 'context/CartContext';
import useModal from 'hooks/useModal';
import ModalCart from '../Modal/ModalCart';
import  logoImage from './Images/logo.png'


const MenuNavbar = () => {
  const { logout, getCookies, removeCookies } = useAuth();
  const { themeToggle, theme } = useAppTheme();

  const [authToken, setAuthToken] = useState(getCookies('auth-token'));
const {firstName} = useTokenInformation();

  const navigate = useNavigate();
  const location = window.location.pathname;
  const isLoginPage = location === ROUTES.LOGIN.absolutePath;

  const handleLogout = () => {
    removeCookies();
    logout();
    setAuthToken(null);
    navigate(ROUTES.LOGIN.absolutePath, { replace: true });
  };
  const { cart } = useCart();
  const { visible, onToggle } = useModal();


  return (
    <StyleMenuNavbar>
      <Link to={ROUTES.HOME.absolutePath} >
        <StyleLogo>
        <Img src={logoImage} />
        <Title size={20} size_mobile={18} lineHeight={48} style={{fontFamily: 'old london'}}>Mundo Digital</Title>
        </StyleLogo>
      </Link>
      <StyleIcon>
      <StyleText>
        <Title size={17} lineHeight={45}>{firstName ? firstName.toUpperCase() : ''}</Title>
      </StyleText>
      <StyleMenuItem
        color="transparent"
        labelColor="text"
        style={{ fontSize: 16 }}
        onClick={handleLogout}
      >
        {!isLoginPage && authToken ? <Exit /> : null}
        {!isLoginPage && !authToken ? <Login /> : null}
      </StyleMenuItem>
      <StyleMenuItemCart
        onClick={onToggle}
        color="transparent"
        labelColor="text"
        style={{ fontSize: 13 }}
      >
        {!isLoginPage && authToken ? <CartShowCount  cart={cart}/> : null}
      </StyleMenuItemCart>
      <StyleMenuItem
        color="transparent"
        labelColor="text"
        onClick={themeToggle}
        style={{ fontSize: 16}}
      >
        {theme === 'light' ? <MoonFilled /> : <SunFilled />}
      </StyleMenuItem>
      </StyleIcon>
      <ModalCart
        cart={ {cartUser : cart}}
        isOpen={visible}
      />
    </StyleMenuNavbar>
  );
};

export default MenuNavbar;
