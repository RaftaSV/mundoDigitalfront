import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {ROUTES} from '../config';
import {useNavigate} from 'react-router-dom';
import modalInformation from '../components/Molecules/Modal/ModalInformation';

const AuthContext = React.createContext();
const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;

export const useAuth =  () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get('auth-token');
  const navigate = useNavigate();
  const removeCookies = () => {
    cookies.remove('auth-token', { path: '/' });
    setIsAuthenticated(false);
  };


  const checkAuthentication = async () => {
    try {
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      const config = {
        headers: { Authorization: token }
      };

      const response = await axios.post(`${baseUrl}/Users/Validation`, {}, config);
      if (response.status === 200) {
        setIsAuthenticated(true);
      }
    } catch (error) {
    if (error.response.status === 401) {
        removeCookies();
        navigate(ROUTES.LOGIN.absolutePath)
    }
      setIsAuthenticated(false);
    }
  };

  useEffect( () => {
     checkAuthentication();
  }, [token]);

  const login = async (userName, pass,  setLoading ) => {
    await axios
      .post(`${baseUrl}/Users/Login`, {
        headers: {
          'Content-Type': 'application/json',
        },
        email: userName,
        password: pass,
      })
      .then((response) => {
       const token = response.data.token;
        cookies.set('auth-token', token, { path: '/', maxAge: 86400});
        axios.defaults.headers.common['Authorization'] = `${token}`;
        setIsAuthenticated(true);
         navigate(ROUTES.HOME.absolutePath)
      })
      .catch((error) => {
        if (error.response.status === 401) {
          modalInformation('Contraseña incorrecta', 'error');
        } else if (error.response.status === 404) {
          modalInformation('Usuario no encontrado en la base de datos', 'error');
        } else {
          // handle other error codes
        }
      });
    setLoading();
  };

  const logout = () => {
    removeCookies();
    navigate(ROUTES.LOGIN.absolutePath)
  };

  const getCookies = (cookie) => {
    const getCookies = cookies.get(cookie);
    return getCookies;
  }


  return { isAuthenticated, login, logout, getCookies, removeCookies };
};

export const AuthContextProvider = (props) => {
  const auth = useAuth();
  return (
    <AuthContext.Provider value={auth}>
      {props.children}
    </AuthContext.Provider>
  );
};
