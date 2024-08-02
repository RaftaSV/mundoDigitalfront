import {StyledImg, StyleContainer, StyleText, StyleWrapper, StyledInformation, StyledImgContainer} from './style';
import Title from '../../../Atoms/Title';

const CardProductInformation =({productName, description, price, model, urlImage}) => {

return (
  <StyleWrapper>
    <StyleText>
      <Title size={35} size_mobile={20} lineHeight={20}>{productName}</Title>
    </StyleText>
    <StyleContainer>
      <StyledImgContainer>
      <StyledImg src={urlImage}/>
        <br/>
        <Title color={'placeholder'} size={30} size_mobile={20} lineHeight={10}>Precio: ${price}</Title>
      </StyledImgContainer>
      <StyledInformation>
        <Title size={30} size_mobile={20} lineHeight={10}>Modelo: {model}</Title>
        <br/>
        <Title htmlTag={'p'} size={20} size_mobile={15} lineHeight={30}>{description}</Title>
      </StyledInformation>
    </StyleContainer>
  </StyleWrapper>
)
}

export default CardProductInformation;
