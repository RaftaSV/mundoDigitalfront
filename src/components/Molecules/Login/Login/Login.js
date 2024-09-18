import React, { useState } from 'react';
import { useAuth } from 'context/AuthContextCookie';
import Title from 'components/Atoms/Title';
import Input from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import Loading from 'components/Atoms/Loading';
import ModalInformation from 'components/Molecules/Modal/ModalInformation';

import {
  StyleImageAvatar,
  Style,
  FormContainer,
  StyleImageLogo,
  StyleShowPassword,
  Checkbox,
  TITLE, StyleContainerImage,
} from './styled';

const SignInForm = ({onClickUser}) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeUsername = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      ModalInformation('Por favor, llene todos los campos', 'warning');
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    await login(email, password, () => setIsLoading(false));
  };


  return (
    <FormContainer>
      <StyleContainerImage>
        <StyleImageLogo loading="lazy" src="logo.png" />
      </StyleContainerImage>
      <Style>
        <StyleImageAvatar loading="lazy" src="Avatar.png"/>
        <Title size={18}>Correo</Title>
        <Input placeholder="Digite su correo" type="email" value={email} onChange={handleChangeUsername}/>
        <Title size={18}>Contraseña</Title>
        <Input
          placeholder="Digite su contraseña"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handleChangePassword}
        />
        <StyleShowPassword>
          <Checkbox type="checkbox" checked={showPassword} onChange={toggleShowPassword}/>
          <Title size={15}>Mostrar contraseña</Title>
        </StyleShowPassword>
        <Button type="submit" disabled={isLoading} onClick={handleSubmit}>
          {isLoading ? <Loading/> : 'INGRESAR'}
        </Button>
        <Button type="button" color="transparent" onClick={onClickUser}>
          Regístrate aquí
        </Button>
      </Style>
    </FormContainer>
  );
};

export default SignInForm;
