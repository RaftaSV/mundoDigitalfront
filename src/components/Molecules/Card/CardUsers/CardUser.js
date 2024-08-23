import Title from 'components/Atoms/Title';
import {
  StyledContainer,
  StyleWrapper,
} from './style';


const CardUser = ({ name,email,tel, userType ,address,onEdit,onRemove}) => {
  return (
    <StyleWrapper>
      <StyledContainer>
        <Title size={16} htmlTag={'p'}>Nombres: {name}</Title>
        <Title size={16} htmlTag={'p'}> Correo: {email}</Title>
        <Title size={16} htmlTag={'p'}> Tel: {tel}</Title>
        <Title size={16} htmlTag={'p'}>Tipo usuario: {userType}</Title>
        <Title size={16} htmlTag={'p'}>Direccion: {address}</Title>
      </StyledContainer>
    </StyleWrapper>
  );
};

export default CardUser;
