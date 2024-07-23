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
  NOTFOUND: {
    path: 'NotFound',
    absolutePath: '/NotFound'
  }
}


export default config;
