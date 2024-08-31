import Modal from 'components/Atoms/ModalCart';
import { StyleWrapper, StyledCard, StyledImg, StyledText, StyledPrice, StyledButton } from './style';
import Title from 'components/Atoms/Title';
import { Trash2, DollarSign } from 'lucide-react';

const ModalCart = ({ isOpen, onCancel, cart }) => {

  const cartItems = cart?.cartUser || [];

  return (
    <Modal
      width={500}
      isOpen={isOpen}
      onCancel={onCancel}
    >
      <StyleWrapper>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            const { cartId, product } = item; // Destructura `cartId` y `product`

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
                  <Trash2 color={'red'} />
                </StyledButton>
                <StyledButton>
                  <DollarSign color={'green'} />
                </StyledButton>
              </StyledCard>
            );
          })
        ) : (
          <div>No items in cart.</div> // Muestra un mensaje si el carrito está vacío
        )}
      </StyleWrapper>
    </Modal>
  );
};

export default ModalCart;
