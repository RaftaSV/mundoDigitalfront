import Title from 'components/Atoms/Title';
import {StyleImage, StyleImageContainer, StyleTextInformation, StyleWrapper} from './style';
import {Link} from 'react-router-dom';
import {ROUTES} from 'config';
import ButtonEditAndDelete from 'components/Molecules/ButtonEditAndDelete';
import useTokenInformation from 'hooks/useTokenInformation';

const CardProducts = ({ image, name,productId, model, price, onEdit,onRemove, cost, quantity, ...restProps}) => {
  const { userType } = useTokenInformation();
  return (
    <Link to={ROUTES.PRODUCT_INFORMATION.absolutePath(productId)}>
    <StyleWrapper>
      <ButtonEditAndDelete onEdit={onEdit} onRemove={onRemove} visible={true}/>
      <StyleImageContainer>
        <StyleImage src={image}/>
      </StyleImageContainer>
      <StyleTextInformation>
        <Title size={20} size_mobile={15} htmlTag={'p'} lineHeight={14}>{name}</Title>
        <Title size={16} size_mobile={12}  htmlTag={'p'} lineHeight={14}>Modelo: {model}</Title>
        <Title size={16} size_mobile={12}  htmlTag={'p'} lineHeight={14}>Precio: ${price}</Title>
        {  userType=== 'ADMIN' ?
          <>
        <Title size={16} size_mobile={12}  htmlTag={'p'} lineHeight={14}>Costo: ${cost}</Title>
        <Title size={16} size_mobile={12} htmlTag={'p'} lineHeight={14}>Existencia: {quantity}</Title>
        </> : null
      }
      </StyleTextInformation>
    </StyleWrapper>
    </Link>
  );
};

export default CardProducts
