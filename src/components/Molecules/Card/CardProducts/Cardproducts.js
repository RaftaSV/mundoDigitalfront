import Title from 'components/Atoms/Title';
import {StyleImage, StyleImageContainer, StyleTextInformation, StyleWrapper} from './style';
import {Link} from 'react-router-dom';
import {ROUTES} from 'config';
import ButtonEditAndDelete from 'components/Molecules/ButtonEditAndDelete';

const CardProducts = ({ image, name,productId, model, price, onEdit,onRemove, ...restProps}) => {

  return (
    <Link to={ROUTES.PRODUCT_INFORMATION.absolutePath(productId)}>
    <StyleWrapper>
      <ButtonEditAndDelete onEdit={onEdit} onRemove={onRemove} />
      <StyleImageContainer>
        <StyleImage src={image}/>
      </StyleImageContainer>
      <StyleTextInformation>
        <Title size={20} size_mobile={15}>{name}</Title>
        <Title size={16} size_mobile={12}>{model}</Title>
        <Title size={16} size_mobile={12}>${price}</Title>
      </StyleTextInformation>
    </StyleWrapper>
    </Link>
  );
};

export default CardProducts
