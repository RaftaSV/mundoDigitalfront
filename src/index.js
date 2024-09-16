import React, { memo, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from 'context/CartContext';
import GlobalStyle from 'styles/global';
import { themeLight, themeDark } from 'styles/theme';
import { AppThemeProvider, useAppTheme } from 'context/AppTheme';
import Routes from 'routes';
const AppRenderTheme = memo(() => {
  const { theme } = useAppTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
});

useEffect(() => {
  ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS_ID}`);
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });add *
}, []);


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
