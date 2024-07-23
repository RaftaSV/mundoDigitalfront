
import {Form, DivLeft, DivRight, CheckboxContainer, Checkbox, TITLE} from './style';
import Modal from 'components/Atoms/Modal';
import Input from 'components/Atoms/Input';
import Title from 'components/Atoms/Title';
import useMutation from 'hooks/useMutation';
import React, {useEffect, useState} from 'react';
import showAlert from 'components/Atoms/SweetAlert';
import { useFormatPhoneNumber } from 'utils/onlyNumberPhone';

const AddUserModal = (
  { isOpen,
    onCancel,
    isUpdate = false,
    user = null,
    isLogin,
    branch,
    options,
    onRefresh
  }) => {
  const [createOrUpdateUser, { loading: loadingAddOrUpdateUser }] = useMutation(isUpdate ? `/Users/${user?.user_id}` : '/Users', {
    method: isUpdate ? 'put' : 'post', // post = create, put = update
    refresh: async () => {
      onCancel();
    }
  });
  const [select, setSelect] = useState(user?.users_type.user_type_id.toString());

  const [isLoading, setIsLoading] = useState(false);

  const [newBranch, setNewBranch] = useState(branch);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSelectStatus();
    setIsLoading(true);
    const data = Object.fromEntries(new FormData(e.target));
    if (select !== undefined || user?.users_type.user_type_id.toString() !== undefined) {
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
    } else {
      setSelect('1');
      setIsLoading(false)
      showAlert('Error', 'Seleccione un tipo de usuario', 1000);

    }

  };

  const Required = isUpdate !== true;

  const [showPassword, setShowPassword] = useState(false);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelect(value);
  };

  const setSelectStatus = () => {
    setSelect('3');
    setValue('');
  }

  const onChangeBranch = (value) => {
    setNewBranch(value);
  }

  const [value, handleChange, setValue] = useFormatPhoneNumber('');

  useEffect(() => {
    setValue(user?.number_phone || '');
  }, [isUpdate]);

  useEffect(() => {
    if (isUpdate) {
      setSelect(user?.users_type.user_type_id.toString());
    } else {
      setSelect('3');
    }

    setNewBranch(branch)
  }, [user, isUpdate]);


 const setLoad = () => {
    setIsLoading(false);
 }

  return (
    <Modal
      width={650}
      isOpen={isOpen}
      onCancel={ () => { onCancel(); setLoad(); setSelectStatus();} }
      title={isUpdate ? 'Actualizar Usuario' : 'Agregar Usuario'}
      okText={isUpdate ? 'Actualizar' : 'Guardar'}
      isLoading={isLoading}
      okProps={{
        type: 'submit',
        form: 'form-User',
        loading: loadingAddOrUpdateUser.toString()
      }}
    >
        <Form id="form-User" method="POST" onSubmit={onSubmit}>
          <DivLeft>
            <Title size={17}>Nombres</Title>
            <Input name="user_full_name" placeholder="Nombre completo" type="text"  defaultValue={user?.user_full_name} required/>
            <Title size={17}>Usuario</Title>
            <Input name="user_name" placeholder="Usuario" type="text" defaultValue={user?.user_name} required/>
            <Title size={17}>Contraseña</Title>
            <Input name="user_password" placeholder="Contraseña" type={showPassword ? 'text' : 'password'}  required={Required}/>
           <CheckboxContainer>
            <Checkbox type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
            <TITLE size={17}>Mostrar contraseña</TITLE>
           </CheckboxContainer>
          </DivLeft>
            <DivRight>
              <Title size={17}>Telefono</Title>
              <Input name="number_phone" placeholder="2203-7655" type="text" value={value} onChange={handleChange} autoComplete='off' required/>
              <Title size={17}>Tipo Usuario </Title>
              <Input name="userStatus" type="hidden" value="0"/>
            </DivRight>
            </Form>

      </Modal>
    );

};

export default AddUserModal;
