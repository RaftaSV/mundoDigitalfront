import Title from 'components/Atoms/Title';
import {StyledRow, StyleImage, StyleImageContainer, StyleTextInformation, StyleWrapper} from './style';
import {Link} from 'react-router-dom';
import {ROUTES} from 'config';
import ButtonEditAndDelete from 'components/Molecules/ButtonEditAndDelete';
import useTokenInformation from 'hooks/useTokenInformation';
import {Package, DollarSignIcon, Tag, DollarSign, BadgeDollarSign} from 'lucide-react'
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
        <Title size={16} size_mobile={12} htmlTag={'p'} lineHeight={14}>{name}</Title>
        <StyledRow>
          <Tag size={14}/>
          <Title size={16} size_mobile={12}  htmlTag={'p'} lineHeight={10}> {model}</Title>
        </StyledRow>
        <StyledRow>
          <DollarSignIcon size={14} />
          <Title size={16} size_mobile={12}  htmlTag={'p'} lineHeight={10}>{price}</Title>
        </StyledRow>
         {  userType=== 'ADMIN' ?
          <>
            <StyledRow>
              <BadgeDollarSign size={14}/>
              <Title size={16} size_mobile={12}  htmlTag={'p'} lineHeight={10}>{cost}</Title>
            </StyledRow>
            <StyledRow>
              <Package size={14}/>
              <Title size={16} size_mobile={12} htmlTag={'p'} lineHeight={10}>{quantity}</Title>
            </StyledRow>
           </> : null
      }
      </StyleTextInformation>
    </StyleWrapper>
    </Link>
  );
};

export default CardProducts
