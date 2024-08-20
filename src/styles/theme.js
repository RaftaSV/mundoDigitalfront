const colorsLight = {
  primary: '#5695d3', // Azul primario
  secondary: '#ff9800', // Naranja secundario
  accent: '#673ab7', // Púrpura de acento
  error: '#f44336', // Rojo de error
  warning: '#ffeb3b', // Amarillo de advertencia
  info: '#2196f3', // Azul de información
  success: '#4caf50', // Verde de éxito
  black: '#212121', // Negro
  white: '#ffffff', // Blanco
  transparent: 'transparent', // Transparente
  background: '#f5f5f5', // Fondo gris claro
  bgCard: '#ffffff', // Fondo blanco de las tarjetas
  text: '#424242', // Texto gris oscuro
  placeholder: 'rgba(12,12,12,0.56)',
  nav: '#ffffff', // Blanco para la navegación
  modal: 'rgba(0, 0, 0, 0.5)', // Modal oscuro semitransparente
  bgModal: '#ffffff', // Fondo blanco del modal
  input: '#e1e1e1', // Color de entrada gris claro
  shadowInput: 'rgba(231,225,225,0.1)', // Sombra de entrada muy suave
  boxShadow: '1em 1em 2em rgba(30, 90, 90, 0.6)', // Sombra muy suave
  borderInput: '#b7a0a0', // Borde de entrada gris
  price: 'rgba(82,122,87,0.34)', // Precio color crema
  border_animation: 'linear-gradient(var(--angle), #000027, white, white, #000027);', // Animación del borde
  colorHome: '#212121', // Color de inicio gris oscuro
  selected: '#3a5659', // Elemento seleccionado gris claro
  overlay: 'rgba(222,228,229,0.6)'
};


const colorsDark = {
  primary: '#1565c0',
  secondary: '#ff5722',
  accent: '#7b1fa2',
  error: '#d32f2f',
  warning: '#fbc02d',
  info: '#1976d2',
  success: '#388e3c',
  black: '#000000',
  white: '#ffffff',
  transparent: 'transparent',
  background: '#212121',
  bgCard: '#404851',
  text: '#fafafa',
  placeholder: '#b0acac',
  nav: '#2a3541',
  bgModal: '#353d45',
  input: 'rgba(117,117,117,0.7)',
  shadowInput: 'rgba(0,0,0,0.1)',
  boxShadow: '1em 1em 2em rgba(10, 90, 90, 0.6)',
  borderInput: '#fafafa',
  price: '#517453',
  border_animation: 'linear-gradient(var(--angle), #000027, white, white, #000027);',
  colorHome: '#fafafa',
  selected: '#373c56',
  overlay: 'rgba(0,11,12,0.49)'
};

const zIndex = {
  min: -1,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  max: 10,
  nav: 20,
  modal: 30,
};

export const themeLight = {
  colors: colorsLight,
  zIndex,
};

export const mediaQueries = {
  mobile: '@media screen and (max-width: 767px)',
  tablet: '@media screen and (min-width: 768px) and (max-width: 1024px)',
  desktop: '@media screen and (min-width: 1025px)',
};

export const themeDark = {
  ...themeLight,
  colors: colorsDark,
};
