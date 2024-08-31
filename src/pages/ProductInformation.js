import {Link, useParams} from 'react-router-dom';
import CardProductInformation from '../components/Molecules/Card/CardProductInformation';
import Layout from '../components/Organisms/Layout';
import useQuery from '../hooks/useQuery';
import Loader from '../components/Molecules/Loader';
import { useEffect, useState } from 'react';
import HeaderPage from '../components/Molecules/HeaderPage';
import {ROUTES} from '../config';
import Button from '../components/Atoms/Button';
import Back from '../components/Atoms/Icons/Back';

const ProductInformation = () => {
  const { productId } = useParams();
  const [url, setUrl] = useState('');
  const { data, loading } = useQuery(url);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    document.title=('informacion')
    if (productId) {
      setUrl(`/products/getById/${productId}`);
    } else {
      setUrl('');
    }
  }, []);


  const product = data?.data;

  return (
    <Layout refresh={refresh}>
      <HeaderPage title={'Regresar'} Back={
        <Link to={ product?.categoryId !== undefined ? ROUTES.PRODUCT.absolutePath(product?.categoryId) : ROUTES.HOME.absolutePath}>
          <Button color={'transparent'}>
            <Back/>
          </Button>
        </Link>
      }/>
      {loading ? (
        <Loader />
      ) : (
        <>
          {product ? (
            <CardProductInformation
              key={product.productId}
              productId={product.productId}
              productName={product.productName}
              model={product.model}
              urlImage={product.urlImage}
              price={product.price}
              description={product.description}
            />
          ) :
           null
          }
        </>
      )}
    </Layout>
  );
}

export default ProductInformation;
