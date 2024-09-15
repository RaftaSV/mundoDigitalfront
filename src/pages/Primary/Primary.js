import CardMain from 'components/Molecules/Card/CardPrimary';
import Layout from 'components/Organisms/Layout';
import costs from './Images/gastos.png';
import invoice from './Images/cuenta.png';
import branchs from './Images/sucursales.png';
import inventory from './Images/Inventory.png';
import supplier from './Images/inventario.png';
import categories from './Images/categories.png';
import user from './Images/Usuarios.png'
import dailyBook  from  './Images/dailyBook.png'
import information from './Images/analisis.png'
import {Link} from 'react-router-dom';
import {ROUTES} from 'config';
import {useAuth} from 'context/AuthContextCookie';
import {Container} from '../style/style';
import {useEffect} from 'react';
import useTokenInformation from '../../hooks/useTokenInformation';
import ContainerCard from '../../components/template/ContainerCard';

const  Primary = () => {

  const {userType} = useTokenInformation();

  useEffect(() => {
    document.title = 'Principal';
  }, []);


  const userTypeUpper = userType.toUpperCase();

  return (
    <Layout>
      <ContainerCard widthMobile={130} widthTablet={160} widthDesktop={200}>
          {userTypeUpper === 'ADMIN' && (
            <>
                <Link to={ROUTES.HOME.absolutePath}>
                  <CardMain name={'Categorias'} image={categories} />
                </Link>
                <Link to={ROUTES.USERS.absolutePath}>
                  <CardMain name={'Usuarios'} image={user} />
                </Link>
                 <Link to={ROUTES.PAGE_VIEW.absolutePath}>
                   <CardMain name={'page view'} image={information} />
                </Link>
            </>
          )}
      </ContainerCard>
    </Layout>
  );
};

export default Primary;
