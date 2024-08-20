import useModal from 'hooks/useModal';
import useQuery from 'hooks/useQuery';
import { useEffect, useRef, useState } from 'react';
import Layout from 'components/Organisms/Layout';
import Loader from 'components/Molecules/Loader';
import HeaderPage from 'components/Molecules/HeaderPage';
import HeaderFilter from 'components/Molecules/HeaderFilter';
import ContainerCard from '../components/template/ContainerCard';
import { useParams } from 'react-router-dom';
import CardProducts from 'components/Molecules/Card/CardProducts';
import ModalProducts from 'components/Molecules/Modal/ModalProducts';
import modalDelete from '../components/Molecules/Modal/ModalDelete';
import useMutation from '../hooks/useMutation';

const Products = () => {
  const { categoryId } = useParams();
  const { data, loading, refresh } = useQuery(`/Products/${categoryId}`);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);
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
  inputRef.current.focus();
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
      setProducts([...new Set(productName)]); // Usar Set para eliminar duplicados
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
      <HeaderPage title={products.join(', ')} onAdd={onToggle}>
        <HeaderFilter handleSearch={handleSearch} placeHolder={'Busca tu producto favorito'} useRef={inputRef}/>
      </HeaderPage>
      )
      }
      {loading ? (
        <Loader />
      ) : (
        <ContainerCard widthDesktop={400} widthTablet={370} widthMobile={300}>
          {filteredProducts?.map(product => {
            const { productId, productName, model, price, urlImage,cost } = product;
            return (
              <CardProducts
                key={productId}
                name={productName}
                model={model}
                price={price}
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
