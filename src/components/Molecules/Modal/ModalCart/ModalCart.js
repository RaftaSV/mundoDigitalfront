import Modal from 'components/Atoms/ModalCart';
import {StyleWrapper, StyledCard, StyledImg, StyledText, StyledPrice, StyledButton} from './style';
import { useAuth } from 'context/AuthContextCookie';
import Title from 'components/Atoms/Title';
import {Trash2, DollarSign} from 'lucide-react';

const ModalCart = ({ isOpen, onCancel }) => {
  const { getCookies } = useAuth();
  const cart = getCookies('cart');

  return (
    <Modal
      width={500}
      isOpen={isOpen}
      onCancel={onCancel}
    >
      <StyleWrapper>
        {cart && cart.length > 0 ? (
          cart.map((item) => {
            const { cartId, product } = item;
            return (
              <StyledCard key={cartId}>
                <StyledImg src={product.urlImage} alt={product.productName || 'Product Image'} />
                <StyledText>
                  <Title htmlTag="p" size={17} size_mobile={13}>{product.productName}</Title>
                </StyledText>
                <StyledPrice>
                  <Title htmlTag="p" size={17} size_mobile={13}>${product.price}</Title>
                </StyledPrice>
                <StyledButton>
                  <Trash2 color={'red'}/>
                </StyledButton>
                <StyledButton>
                  <DollarSign color={'green'}/>
                </StyledButton>
              </StyledCard>
            );
          })
        ) :
          null
        }
      </StyleWrapper>
    </Modal>
  );

};

export default ModalCart;
