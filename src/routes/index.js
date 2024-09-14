import React from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import { ROUTES } from 'config';
import NotFound from 'pages/404';
import Categories from 'pages/Categories';
import Login from 'pages/Login';
import Products from 'pages/Products';
import ProductInformation from 'pages/ProductInformation';
import ProtectedRouter from './ProtectedRouter';
import Users from '../pages/Users';
import usePageViews from '../hooks/insertPageView';
import PageView from '../pages/PageView';


const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes >
        <Route element={<ProtectedRouter />}>
          <Route path={ROUTES.USERS.absolutePath} element={<Users/>} />
          <Route path={ROUTES.LOGIN.absolutePath} element={<Login />} />
          <Route path={ROUTES.HOME.absolutePath} element={<Categories />} />
          <Route path={ROUTES.PRODUCT.path} element={<Products/>} />
          <Route path={ROUTES.PRODUCT_INFORMATION.path} element={<ProductInformation/>} />
          <Route path={ROUTES.PAGE_VIEW.absolutePath} element={<PageView/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
