import useMutation from 'hooks/useMutation';
import Modal from 'components/Atoms/Modal';
import Title from 'components/Atoms/Title';
import {Form} from './style';
import {  useState } from 'react';
import Input from 'components/Atoms/Input';
import showAlert from 'components/Atoms/SweetAlert';



const AddModalCategory = ({ isOpen, onCancel, onRefresh, isUpdate = false, Category = null }) => {
  const [createOrUpdateCategory, { loading: loadingAddOrUpdateCategory }] = useMutation(
    isUpdate ? `/Categories/${Category?.categoryId}` : '/Categories',
    {
      method: isUpdate ? 'put' : 'post', // post = create, put = update
      refresh: async () => {
        await onRefresh();
        onCancel();
      },
    }
  );

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = Object.fromEntries(new FormData(e.target));
    const result = await createOrUpdateCategory({
      variables: {
        ...data,
      }
    });

    if (result?.data) {
      showAlert('', result?.data.message || 'Listo', 1000);
    }

    setIsLoading(false);
  };


  const setLoad = () => {
    setIsLoading(false);
  };


  return (
    <Modal
      width={400}
      isOpen={isOpen}
      onCancel={() => {
        onCancel();
        setLoad();
      }}
      title={isUpdate ? 'Actualizar Categoria' : 'Agregar Categoria'}
      okText={isUpdate ? 'Actualizar' : 'Guardar'}
      isLoading={isLoading}
      okProps={{
        type: 'submit',
        form: 'form-Categories',
        loading: loadingAddOrUpdateCategory.toString(),
      }}
    >
      <Form id="form-Categories" method="POST" onSubmit={onSubmit}>
          <Title size={13}>Nombre</Title>
          <Input defaultValue={Category?.categoryName}
                 name="categoryName"
                 placeholder="Ejemplo: Laptops" type="text"
                 autoFocus={true}
                 required />
        <Title size={13}>Url imagen</Title>
          <Input defaultValue={Category?.urlImage}
                 name="urlImage"
                 placeholder="Ejemplo: https://www.imagen.com/imagen.png" type="text"
                 autoFocus={true}
                 required />
        </Form>
    </Modal>
  );
};

export default AddModalCategory;
