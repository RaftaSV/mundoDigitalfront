import Title from 'components/Atoms/Title';
import {StyleImage, StyleImageContainer, StyleTextInformation, StyleWrapper} from './style';


const CardProducts = ({ image, name,productId, model, price, onEdit,onRemove, ...restProps}) => {

  return (
    <StyleWrapper>
      <StyleImageContainer>
        <StyleImage src={image}/>
      </StyleImageContainer>
      <StyleTextInformation>
        <Title size={20} size_mobile={15}>{name}</Title>
        <Title size={16} size_mobile={12}>{model}</Title>
        <Title size={16} size_mobile={12}>${price}</Title>
      </StyleTextInformation>
    </StyleWrapper>
  );
};

export default CardProducts
