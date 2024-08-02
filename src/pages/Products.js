import useModal from 'hooks/useModal';
import useQuery from 'hooks/useQuery';
import { useEffect, useRef, useState } from 'react';
import Layout from 'components/Organisms/Layout';
import Loader from 'components/Molecules/Loader';
import HeaderPage from 'components/Molecules/HeaderPage';
import HeaderFilter from 'components/Molecules/HeaderFilter';
import ContainerCard from '../components/template/ContainerCard';
import { useParams } from 'react-router-dom';
import CardProducts from '../components/Molecules/Card/CardProducts';

const Products = () => {
  const { categoryId } = useParams();
  const { data, loading, refresh } = useQuery(`/Products/${categoryId}`);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    document.title = 'Productos';

    if (data?.products) {
      // Extraer los nombres de las categorías
      const categoryNames = data.products.map(product => product.category.categoryName);
      setCategories([...new Set(categoryNames)]); // Usar Set para eliminar duplicados
    } else {
      console.error('Data no contiene productos o es undefined:', data);
    }
  }, [loading, data]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = data?.products?.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
      <HeaderPage title={categories.join(', ')}>
        <HeaderFilter handleSearch={handleSearch} placeHolder={'Busca tu producto favorito'} useRef={inputRef} />
      </HeaderPage>
      )
      }
      {loading ? (
        <Loader />
      ) : (
        <ContainerCard widthDesktop={270} widthTablet={250} widthMobile={200}>
          {filteredProducts?.map(product => {
            const { productId, productName, model, price, urlImage } = product;
            return (
              <CardProducts
                key={productId}
                name={productName}
                model={model}
                price={price}
                productId={productId}
                image={urlImage}
              />
            );
          })}
        </ContainerCard>
      )}
    </Layout>
  );
};

export default Products;
