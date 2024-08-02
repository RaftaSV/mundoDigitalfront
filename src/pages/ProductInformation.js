import { useParams } from 'react-router-dom';
import CardProductInformation from '../components/Molecules/Card/CardProductInformation';
import Layout from '../components/Organisms/Layout';
import useQuery from '../hooks/useQuery';
import Loader from '../components/Molecules/Loader';
import { useEffect, useState } from 'react';

const ProductInformation = () => {
  const { productId } = useParams();
  const [url, setUrl] = useState('');
  const { data, loading } = useQuery(url);

  useEffect(() => {
    document.title=('informacion')
    if (productId) {
      setUrl(`/products/getbyid/${productId}`);
    } else {
      setUrl('');
    }
  }, []);

  const product = data?.data;

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          {product ? (
            <CardProductInformation
              key={product.productId}
              productName={product.productName}
              model={product.model}
              urlImage={product.urlImage}
              price={product.price}
              description={product.description}
            />
          ) : (
           null
          )}
        </>
      )}
    </Layout>
  );
}

export default ProductInformation;
