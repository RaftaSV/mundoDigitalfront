const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;

const config = {
  baseUrl
};

export const ROUTES = {
  HOME: {
    path: '/',
    absolutePath: '/'
  },
  LOGIN: {
    path: '/inicio',
    absolutePath: '/inicio'
  },
  USERS: {
    path: 'usuarios',
    absolutePath: '/Usuarios'
  },
  PAGE_VIEW: {
    path: 'vistas de paginas',
    absolutePath: '/InfoWeb'
  },
  PRIMARY: {
    path: 'Principal',
    absolutePath: '/Principal'
  },
  WELCOME: {
    path: 'Bienvenida',
    absolutePath: '/Bienvenida'
  },
  NOTFOUND: {
    path: 'NotFound',
    absolutePath: '/NotFound'
  },
  PRODUCT: {
    path: '/productos/:categoryId', // Ruta con parámetro
    absolutePath: (categoryId) => `/productos/${categoryId}` // Función para construir la ruta con el id
  },
  PRODUCT_INFORMATION: {
    path: '/InformacionProducto/:productId',
    absolutePath: (productId) => `/InformacionProducto/${productId}`
  }
}

export default config;
