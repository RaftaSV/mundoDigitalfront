import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Organisms/Layout';
import HeaderWelcome from '../components/Molecules/HeaderWelcome';
import FeaturesSectionWelcome from '../components/Molecules/FeaturesSectionWelcome';

const mediaQueries = {
  mobile: '(max-width: 768px)',
  tablet: '(min-width: 769px) and (max-width: 1024px)',
  desktop: '(min-width: 1025px)',
};

// Estilo para el contenedor principal
const StyleWrapper = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;

  @media ${mediaQueries.mobile} {
    padding: 10px;
  }
`;




// Estilo para el pie de página
const Footer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  p {
    font-size: 0.9rem;
    margin: 0;
  }

  @media ${mediaQueries.mobile} {
    p {
      font-size: 0.8rem;
    }
  }
`;

// Componente principal del sitio web

document.title='Bienvenido'
const WelcomeWebsite = () => {
  return (
    <Layout>
      <>
      <HeaderWelcome/>
      <FeaturesSectionWelcome/>
      <Footer>
        <p>© 2024 Mundo Digital. Todos los derechos reservados.</p>
      </Footer>
    </>
    </Layout>
  );
};

export default WelcomeWebsite;
