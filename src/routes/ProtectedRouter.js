import React from 'react';
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
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
    userType = 'CLIENTE';
  }

  const { categoryId, productId } = useParams();

  // Normaliza las rutas eliminando las barras finales y usando minúsculas para evitar problemas de comparación
  const normalizePath = (path) => path.toLowerCase().replace(/\/+$/, '');

  const restrictedRoutesForClient = [
    normalizePath(ROUTES.LOGIN.absolutePath),
    normalizePath(ROUTES.HOME.absolutePath),
    normalizePath(ROUTES.PRODUCT.absolutePath(categoryId)),
    normalizePath(ROUTES.PRODUCT_INFORMATION.absolutePath(productId)),
    normalizePath(ROUTES.CATEGORY.absolutePath),
    normalizePath(ROUTES.PAYMENT_PRODUCTS.absolutePath),
  ];

  // Normaliza la ruta actual
  const currentPath = normalizePath(location.pathname);

  if (userType === 'ADMIN') {
    return <Outlet />;
  } else if (userType === 'CLIENTE' && !restrictedRoutesForClient.includes(currentPath)) {
    console.log('Retornando a home ', userType);
    console.log('Current Path:', currentPath);
    console.log('Restricted Routes:', restrictedRoutesForClient);

    return <Navigate to={ROUTES.HOME.absolutePath} replace={true} />;
  }

  return <Outlet />;
};

export default ProtectedRouter;
