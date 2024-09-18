import useModal from 'hooks/useModal';
import useQuery from 'hooks/useQuery';
import { useEffect, useState } from 'react';
import Layout from 'components/Organisms/Layout';
import Loader from 'components/Molecules/Loader';
import HeaderPage from 'components/Molecules/HeaderPage';
import HeaderFilter from 'components/Molecules/HeaderFilter';
import ContainerCard from '../components/template/ContainerCard';
import {Link, useParams} from 'react-router-dom';
import CardProducts from 'components/Molecules/Card/CardProducts';
import ModalProducts from 'components/Molecules/Modal/ModalProducts';
import modalDelete from '../components/Molecules/Modal/ModalDelete';
import useMutation from '../hooks/useMutation';
import Button from '../components/Atoms/Button';
import Back from '../components/Atoms/Icons/Back';
import {ROUTES} from '../config';

const Products = () => {
  const { categoryId } = useParams();
  const { data, loading, refresh } = useQuery(`/Products/${categoryId}`);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const {visible: isUpdate, onHidden, onVisible} = useModal();
  const {visible, onToggle} = useModal();
  const [productEdit, setProductEdit ] = useState(null);

const onEdit =(Products) => {
  onVisible();
  setProductEdit(Products);
  onToggle();
}

const onClose = () => {
  onHidden();
  setProductEdit(null);
  onToggle();
}
const [deleteProduct] = useMutation('/products', {
  refresh,
  method: 'delete'
})

  useEffect(() => {
    document.title = 'Productos';

    if (data?.products) {
      // Extraer los nombres de los productos
      const productName = data.products.map(product => product.category.categoryName);
      setProducts([...new Set(productName)]);
    } else {
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
        data?.products.length > 0 ? (
          <HeaderPage
            title={products.join(', ')}
            onAdd={onToggle}
            Back={
              <Link to={ROUTES.CATEGORY.absolutePath}>
                <Button color="transparent" labelColor={'red'} >
                  <Back />
                </Button>
              </Link>
            }
          >
            <HeaderFilter
              handleSearch={handleSearch}
              placeHolder="Busca tu producto favorito"
            />
          </HeaderPage>
        ) : (
          <HeaderPage
            onAdd={onToggle}
            Back={
              <Link to={ROUTES.HOME.absolutePath}>
                <Button color="transparent">
                  <Back />
                </Button>
              </Link>
            }
          />
        ))
      }
      {loading ? (
        <Loader />
      ) : (
        <ContainerCard widthDesktop={350} widthTablet={330} widthMobile={260}>
          {filteredProducts?.map(product => {
            const { productId, productName, model, price, urlImage, cost, quantity } = product;
            return (
              <CardProducts
                key={productId}
                name={productName}
                model={model}
                price={price}
                cost={cost}
                quantity={quantity}
                productId={productId}
                image={urlImage}
                onEdit={ () => {
                  onEdit(product)
                }}
                onRemove={()=>{modalDelete(productId,
                  `Desea eliminar este producto ${productName}`,
                  'warning', deleteProduct)}}
              />
            );
          })}
        </ContainerCard>
      )}
      <ModalProducts product={productEdit}
                     isOpen={visible}
                     categoryId={categoryId}
                     isUpdate={isUpdate}
                     onRefresh={refresh}
                     onCancel={onClose}
      />
    </Layout>
  );
};

export default Products;
