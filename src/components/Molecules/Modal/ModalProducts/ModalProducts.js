import useMutation from 'hooks/useMutation';
import Modal from 'components/Atoms/Modal';
import Title from 'components/Atoms/Title';
import {ContainerLeft, ContainerRight, Form} from './style';
import {useEffect, useState} from 'react';
import Input from 'components/Atoms/Input';
import showAlert from 'components/Atoms/SweetAlert';
import Textarea from 'components/Atoms/Textarea';
import {usePositiveIntegersWithTwoDecimals} from 'utils/onlyNumberAndDecimal';
import {usePositiveIntegers} from 'utils/onlyPositiveNumber';


const AddModalProducts = ({ isOpen, onCancel, onRefresh, isUpdate = false, product = null, categoryId }) => {
  const [createOrUpdateProduct, { loading: loadingAddOrUpdateProduct }] = useMutation(
    isUpdate ? `/products/${product?.productId}` : '/products',
    {
      method: isUpdate ? 'put' : 'post', // post = create, put = update
      refresh: async () => {
        await onRefresh();
        onCancel();
      },
    }
  );
  const [isLoading, setIsLoading] = useState(false);
  const [ costValue, handleCostChange, setCostValue ] = usePositiveIntegersWithTwoDecimals('');
  const [priceValue, handlePriceChange, setPriceValue] = usePositiveIntegersWithTwoDecimals('');
  const [value, handleChange, setValue] = usePositiveIntegers('')
  useEffect(() => {
    setCostValue(product?.cost);
    setPriceValue(product?.price);
    setValue(product?.quantity)
  }, [product]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = Object.fromEntries(new FormData(e.target));
    const result = await createOrUpdateProduct({
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
      width={600}
      isOpen={isOpen}
      onCancel={() => {
        onCancel();
        setLoad();
      }}
      title={isUpdate ? 'Actualizar producto' : 'Agregar producto'}
      okText={isUpdate ? 'Actualizar' : 'Guardar'}
      isLoading={isLoading}
      okProps={{
        type: 'submit',
        form: 'form-Products',
        loading: loadingAddOrUpdateProduct.toString(),
      }}
    >
      <Form id="form-Products" method="POST" onSubmit={onSubmit}>
        <ContainerLeft>
          <Title size={13}>Nombre</Title>
          <Input defaultValue={product?.productName}
                 name="productName"
                 placeholder="Ejemplo: Laptops" type="text"
                 autoFocus={true}
                 required />
        <Title size={13}>Modelo</Title>
          <Input defaultValue={product?.model}
                 name="model"
                 placeholder="Ejemplo: 15dala23" type="text"
                 required />
        <Title size={13}>Url imagen</Title>
        <Input defaultValue={product?.urlImage}
               name="urlImage"
               placeholder="Ejemplo: https://www.imagen.com/imagen.png" type="text"
               required />
        <Title size={13}>Cantidad</Title>
        <Input value={value}
               onChange={handleChange}
               name="quantity"
               placeholder="Ejemplo: 20" type="text"
               required />
        </ContainerLeft>
        <ContainerRight>
        <Title size={13}>Precio</Title>
        <Input
               name="price"
               placeholder="Ejemplo: 30.90" type="text"
               value={priceValue}
               onChange={handlePriceChange}
               required />
        <Title size={13}>Costo</Title>
        <Input
               name="cost"
               placeholder="Ejemplo: 20.90" type="text"
               value={costValue}
               onChange={handleCostChange}
               required />
        <Title size={13}>Descripcion</Title>
        <Textarea defaultValue={product?.description}
               name="description"
               placeholder="Ejemplo: procesador i5 de decimoprimera generacion" type="text"
               required />
        <Input defaultValue={categoryId}
               name="categoryId"
               placeholder="Ejemplo: 20.90" type="hidden"
               required />
        </ContainerRight>
        </Form>
    </Modal>
  );
};

export default AddModalProducts;
