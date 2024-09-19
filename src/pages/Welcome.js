
import Layout from 'components/Organisms/Layout';
import Welcome from '../components/template/Welcome';
import {useEffect} from 'react';


const WelcomeWebsite = () => {
  useEffect(() => {
    document.title='Bienvenido';
  }, []);
  return (
    <Layout>
      <Welcome/>
    </Layout>
  );
};

export default WelcomeWebsite;
