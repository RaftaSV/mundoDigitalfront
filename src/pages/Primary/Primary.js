import CardMain from 'components/Molecules/Card/CardPrimary';
import Layout from 'components/Organisms/Layout';
import categories from './Images/categories.png';
import user from './Images/Usuarios.png';
import information from './Images/analisis.png'
import DailyBook from './Images/dailyBook.png';
import {Link} from 'react-router-dom';
import {ROUTES} from 'config';
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
              <Link to={ROUTES.DAILY.absolutePath}>
                <CardMain name={'Libro diario'} image={DailyBook} />
              </Link>
                <Link to={ROUTES.CATEGORY.absolutePath}>
                  <CardMain name={'Categorias'} image={categories} />
                </Link>
                <Link to={ROUTES.USERS.absolutePath}>
                  <CardMain name={'Usuarios'} image={user} />
                </Link>
                 <Link to={ROUTES.PAGE_VIEW.absolutePath}>
                   <CardMain name={'Informacion'} image={information} />
                </Link>
            </>
          )}
      </ContainerCard>
    </Layout>
  );
};

export default Primary;
