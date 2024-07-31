import { useAppTheme } from 'context/AppTheme';
import SunFilled from 'components/Atoms/Icons/SunFilled';
import MoonFilled from 'components/Atoms/Icons/MoonFilled';
import Exit from 'components/Atoms/Icons/Exit';
import Login from 'components/Atoms/Icons/Login';
import {StyleMenuItem, StyleMenuNavbar, StyleText} from './style';
import { useAuth } from 'context/AuthContextCookie';
import {ROUTES} from 'config';
import Title from 'components/Atoms/Title';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useTokenInformation from 'hooks/useTokenInformation';


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

  return (
    <StyleMenuNavbar>
      <StyleText>
        <Title size={17}>{firstName ? firstName.toUpperCase() : ''}</Title>
      </StyleText>
      <StyleMenuItem
        color="transparent"
        labelColor="text"
        style={{ fontSize: 18 }}
        onClick={handleLogout}
      >
        {!isLoginPage && authToken ? <Exit /> : null}
        {!isLoginPage && !authToken ? <Login /> : null}
      </StyleMenuItem>
      <StyleMenuItem
        color="transparent"
        labelColor="text"
        onClick={themeToggle}
        style={{ fontSize: 20 }}
      >
        {theme === 'light' ? <MoonFilled /> : <SunFilled />}
      </StyleMenuItem>
    </StyleMenuNavbar>
  );
};

export default MenuNavbar;
