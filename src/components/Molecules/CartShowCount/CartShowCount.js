// CartShowCount.js
import React from 'react';
import Cart from 'components/Atoms/Icons/Cart';
import { StyledCount, StyledWrapper } from './styled';
import useModal from 'hooks/useModal';
import ModalCart from 'components/Molecules/Modal/ModalCart';
import { useCart } from 'context/CartContext';

const CartShowCount = () => {
  const { cart } = useCart();
  const { visible, onToggle } = useModal();

  return (
    <StyledWrapper onClick={onToggle} isOpen={visible}>
      <Cart />
      <StyledCount>{cart?.length}</StyledCount>
      <ModalCart onCancel={onToggle} isOpen={visible} onClose={onToggle} cart={{ cartUser: cart }} />
    </StyledWrapper>
  );
};

export default CartShowCount;
