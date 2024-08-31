import React, { useState, useEffect } from 'react';
import Cart from 'components/Atoms/Icons/Cart';
import { useAuth } from 'context/AuthContextCookie';
import { StyledCount, StyledWrapper } from './styled';
import useModal from 'hooks/useModal';
import ModalCart from 'components/Molecules/Modal/ModalCart';

const CartShowCount = () => {
  const { getCookies } = useAuth();
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartCookie, setCartCookie] = useState(getCookies('cart'));
  const { visible, onToggle } = useModal();

  useEffect(() => {
    const items = cartCookie?.cartUser || [];
    setCartItems(items);
    setCount(items.length);
  }, [cartCookie]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCookie = getCookies('cart');
      if (newCookie !== cartCookie) {
        setCartCookie(newCookie);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [cartCookie, getCookies]);

  return (
    <StyledWrapper onClick={onToggle} isOpen={visible}>
      <Cart />
      <StyledCount>{count}</StyledCount>
      <ModalCart onCancel={onToggle} isOpen={visible} onClose={onToggle} cart={{ cartUser: cartItems }} />
    </StyledWrapper>
  );
};

export default CartShowCount;
