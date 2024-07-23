import {
  ButtonContainer,
  ChildrenContainer,
  StyleButton,
  StyleWrapper
} from './style';
import Add from 'components/Atoms/Icons/Add';
import Title from 'components/Atoms/Title';
import useTokenInformation from 'hooks/useTokenInformation';

const HeaderPage = ({ title, onAdd = null, children, validation = true }) => {
  const { userType } = useTokenInformation();

  const shouldShowAddButton = onAdd != null && (!validation || (validation && userType !== 'CAJERO'));

  return (
    <StyleWrapper>
      <Title htmlTag="h1" size={38} 
      size_mobile={25}
      >
        {title}
      </Title>
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
      {shouldShowAddButton && (
        <ButtonContainer onClick={onAdd}>
          <Title size={16}>Agregar</Title>
          <StyleButton labelColor="white">
            <Add />
          </StyleButton>
        </ButtonContainer>
      )}
    </StyleWrapper>
  );
};

export default HeaderPage;
