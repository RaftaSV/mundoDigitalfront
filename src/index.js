import React, { memo, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from 'context/CartContext';
import ReactGA from 'react-ga4';

import GlobalStyle from 'styles/global';
import { themeLight, themeDark } from 'styles/theme';
import { AppThemeProvider, useAppTheme } from 'context/AppTheme';
import Routes from 'routes';

const AppRenderTheme = memo(() => {
  const { theme } = useAppTheme();

  useEffect(() => {
    // Inicializar Google Analytics
    ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}`); // Reemplaza con tu ID de seguimiento
    ReactGA.send('pageview'); // Registra la primera vista de página
  }, []); // Se ejecuta solo una vez cuando el componente se monta

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
