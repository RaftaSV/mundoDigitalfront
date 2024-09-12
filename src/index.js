import React, { memo, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from 'context/CartContext';
import ReactGA from 'react-ga4';

import GlobalStyle from 'styles/global';
import { themeLight, themeDark } from 'styles/theme';
import { AppThemeProvider, useAppTheme } from 'context/AppTheme';
import Routes from 'routes';

// Inicializa Google Analytics
ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}`); // Reemplaza con tu ID de Google Analytics

const AppRenderTheme = memo(() => {
  const { theme } = useAppTheme();

  useEffect(() => {
    // Rastrea la vista de la página
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
    console.log(window.location.pathname + window.location.search, `${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}`);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
});

const App = () => {
  return (
    <AppThemeProvider>
      <CartProvider>
        <AppRenderTheme />
      </CartProvider>
    </AppThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
