
import {Form, DivLeft, DivRight, CheckboxContainer, Checkbox, TITLE, Container} from './style';
import Modal from 'components/Atoms/Modal';
import Input from 'components/Atoms/Input';
import Title from 'components/Atoms/Title';
import useMutation from 'hooks/useMutation';
import React, {useEffect, useState} from 'react';
import showAlert from 'components/Atoms/SweetAlert';
import { useFormatPhoneNumber } from 'utils/onlyNumberPhone';
import Textarea from 'components/Atoms/Textarea';

const AddUserModal = (
  { isOpen,
    onCancel,
    isUpdate = false,
    onRefresh,
    isLogin = false
  }) => {
  const [createOrUpdateUser, { loading: loadingAddOrUpdateUser }] = useMutation(isUpdate ? `/Users/` : '/Users', {
    method: isUpdate ? 'put' : 'post', // post = create, put = update
    refresh: async () => {
      onCancel();
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  const [value, handleChange, setValue] = useFormatPhoneNumber('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = Object.fromEntries(new FormData(e.target));
      const result = await createOrUpdateUser({
        variables: {
          ...data,
        }
      })
      if (result?.data) {
        showAlert('', result.data.message ,1000);
      }
        setIsLoading(false);
      await onRefresh();
  };

  const Required = isUpdate !== true;

  const [showPassword, setShowPassword] = useState(false);

 const setLoad = () => {
    setIsLoading(false);
 }

  return (
    <Modal
      width={650}
      isOpen={isOpen}
      onCancel={ () => { onCancel(); setLoad(); } }
      title={isUpdate ? 'Actualizar Usuario' : isLogin ? 'Registro de usuario' : 'Registro de Admin'}
      okText={isUpdate ? 'Actualizar' : 'Guardar'}
      isLoading={isLoading}
      okProps={{
        type: 'submit',
        form: 'form-User',
        loading: loadingAddOrUpdateUser.toString()
      }}
    >
        <Form id="form-User" method="POST" onSubmit={onSubmit}  autoComplete="new-form">
          <Container>
            <Title size={17}>Nombre completo</Title>
            <Input name="fullName" placeholder="Nombre completo" type="text" autoComplete='new-fullName'  required/>
            <Title size={17}>Correo</Title>
            <Input name="email" placeholder="usuario@gmail.com" type="mail" autoComplete='new-email' required/>
            <Title size={17}>Numero de telefono</Title>
            <Input name="phoneNumber" placeholder="2203-7655" type="text" value={value} onChange={handleChange} autoComplete='new-phoneNumber' required/>
            <Title size={17}>Direccion</Title>
            <Textarea name="address" placeholder="Direccion" type="text"  autoComplete='new-address' required/>
            <Title size={17}>Contraseña</Title>
            <Input name="password" placeholder="Contraseña" type={showPassword ? 'text' : 'password'}  required={Required}/>
             <CheckboxContainer>
             <Checkbox type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
             <TITLE size={17}>Mostrar contraseña</TITLE>
               {isLogin ? (
                 <Input name="userTypeId" value={2}placeholder="cliente" type={'hidden'}  required={Required}/>
               ) : <Input name="userTypeId" value={1}placeholder="Admin" type={'hidden'}  required={Required}/> }
           </CheckboxContainer>
          </Container>
        </Form>
      </Modal>
    );

};

export default AddUserModal;
