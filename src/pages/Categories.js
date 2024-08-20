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

function Categories() {
  const { data, loading, refresh } = useQuery('/Categories');
  const { visible, onToggle } = useModal();
  const [CategoryEdit, setCategoryEdit] = useState(null);
  const { visible: isUpdate, onHidden, onVisible, } = useModal();
  const [searchTerm, setSearchTerm] = useState('');
  const  inputRef = useRef(null);

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
    inputRef.current.focus();
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
      <HeaderPage title="Categorias" onAdd={onToggle} >
      <HeaderFilter handleSearch={handleSearch} placeHolder={'Busca tu categoria favorita'} useRef={inputRef}/>
      </HeaderPage>
      {loading ? (
        <Loader />
      ) : (
        <ContainerCard
          widthDesktop={270}
          widthTablet={250}
          widthMobile={200}
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
