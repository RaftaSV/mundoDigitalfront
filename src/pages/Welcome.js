import React from 'react';
import Layout from 'components/Organisms/Layout';
import Welcome from '../components/template/Welcome';

document.title='Bienvenido';

const WelcomeWebsite = () => {
  return (
    <Layout>
      <Welcome/>
    </Layout>
  );
};

export default WelcomeWebsite;
