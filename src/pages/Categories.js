import useModal from 'hooks/useModal';
import useQuery from 'hooks/useQuery';
import {useEffect, useRef, useState} from 'react';
import Layout from 'components/Organisms/Layout';
import Loader from 'components/Molecules/Loader';
import HeaderPage from 'components/Molecules/HeaderPage';
import AddModalCategory  from 'components/Molecules/Modal/ModalCategory';
import useMutation from 'hooks/useMutation';
import CardCategories from 'components/Molecules/Card/CardCategories';
import modalDelete from 'components/Molecules/Modal/ModalDelete';
import HeaderFilter from 'components/Molecules/HeaderFilter';
import ContainerCard from '../components/template/ContainerCard';
import CardPurchases from '../components/Atoms/CardPurchases';

function Categories() {
  const { data, loading, refresh } = useQuery('/Categories');
  const { visible, onToggle } = useModal();
  const [CategoryEdit, setCategoryEdit] = useState(null);
  const { visible: isUpdate, onHidden, onVisible, } = useModal();
  const [searchTerm, setSearchTerm] = useState('');

  const [deleteCategory] = useMutation(`/Categories`, {
    refresh,
    method: 'delete'
  }
  );



  const onEdit = (Category) => {
    onVisible();
    setCategoryEdit(Category);
    onToggle();
  };

  const onClose = () => {
    onHidden();
    setCategoryEdit(null);
    onToggle();
  };



  useEffect(() => {
    document.title = 'Categorías';
  }, [loading, data]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }


  const filteredCategories = data?.categories?.filter((Category) =>
    Category.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <CardPurchases/>
      <HeaderPage onAdd={onToggle} validation={true} >
      <HeaderFilter handleSearch={handleSearch} placeHolder={'Busca tu categoria favorita'}/>
      </HeaderPage>

      {loading ? (
        <Loader />
      ) : (
        <ContainerCard
          widthDesktop={190}
          widthTablet={190}
          widthMobile={170}
        >
          {filteredCategories?.map((Category) => {
            const {categoryId, categoryName, urlImage} = Category;
            return (
                  <CardCategories
                  key={categoryId}
                  categoryId={categoryId}
                  name={categoryName}
                  image={urlImage}
                  onEdit={() => onEdit(Category)}
                  onRemove={()=> {modalDelete(categoryId,`Desea eliminar la categoria ${categoryName}`,'warning', deleteCategory)} }
                />
            );
          })}
        </ContainerCard>
      )}
      <AddModalCategory Category={CategoryEdit}
                        isOpen={visible}
                        isUpdate={isUpdate}
                        onRefresh={refresh}
                        onCancel={onClose}  />
    </Layout>
  );
}

export default Categories;
