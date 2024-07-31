import React from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import { ROUTES } from 'config';
import NotFound from 'pages/404';
import Categories from 'pages/Categories';
import Login from 'pages/Login';
import Products from 'pages/Products';


const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path={ROUTES.LOGIN.absolutePath} element={<Login />} />
        <Route path={ROUTES.HOME.absolutePath} element={<Categories />} />
        <Route path={ROUTES.PRODUCT.path} element={<Products/>} />
        <Route path="*" element={<NotFound/>} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
