import Modal from 'components/Atoms/ModalCart';
import { StyleWrapper, StyledCard, StyledImg, StyledText, StyledPrice, StyledButton } from './style';
import Title from 'components/Atoms/Title';
import { Trash2, DollarSign } from 'lucide-react';
import useMutation from 'hooks/useMutation';
import showAlert from 'components/Atoms/SweetAlert';
import {useCart} from 'context/CartContext';

const ModalCart = ({ isOpen, onCancel, cart }) => {

  const cartItems = cart?.cartUser || [];
  const {updateCart} = useCart();

  const [deleteCart] = useMutation(`/carts`, {
      method: 'delete'
    }
  );

  const deleteCarts = async( cartId) => {
    const result = await deleteCart({}, cartId);
    if (result?.data) {
      showAlert('', result?.data.message || 'Listo', 1000);
    }
    setTimeout( () => {
      updateCart(result.data.cartUser)
    }, 500);
  }

  return (
    <Modal
      width={500}
      isOpen={isOpen}
    >
      <StyleWrapper >
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
                <StyledButton onClick={ async ()=> {
                  await deleteCarts(cartId);
                }}>
                  <Trash2 color={'red'} />
                </StyledButton>
                <StyledButton>
                  <DollarSign color={'green'} />
                </StyledButton>
              </StyledCard>
            );
          })
        ) : (
          <Title htmlTag="p" size={17} size_mobile={13}>No tienes nada sgregado a tu carrito</Title>
        )}
      </StyleWrapper>
    </Modal>
  );
};

export default ModalCart;
