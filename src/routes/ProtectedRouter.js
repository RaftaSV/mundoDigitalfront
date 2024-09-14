import React from 'react';
import {Navigate, Outlet, useLocation, useParams} from 'react-router-dom';
import { useAuth } from 'context/AuthContextCookie';
import { ROUTES } from 'config';
import usePageViews from '../hooks/insertPageView';
const ProtectedRouter = () => {
  const { getCookies } = useAuth();
  const token = getCookies('auth-token');
  const location = useLocation();
  let userType = 'CLIENTE';

  usePageViews();
  if (token) {
    const payload = token.split('.')[1];
    const decoded = atob(payload);
    const userObject = JSON.parse(decoded);
    userType = userObject.User.userstype.userType.toString().toLocaleUpperCase();
  } else {
    userType = 'CLIENTE'
  }
  const { categoryId, productId } = useParams();
  const restrictedRoutesForClient = [
    ROUTES.LOGIN.absolutePath,
    ROUTES.HOME.absolutePath,
    ROUTES.PRODUCT.absolutePath(categoryId),
    ROUTES.PRODUCT_INFORMATION.absolutePath(productId),
  ];
  if (userType === 'ADMIN') {
    return <Outlet />;
  } else if (userType === 'CLIENTE' && !restrictedRoutesForClient.includes(location.pathname)){
    return <Navigate to={ROUTES.HOME.absolutePath} replace={true} />;
  }

  return <Outlet />;
};

export default ProtectedRouter;
