// CartShowCount.js
import React from 'react';
import Cart from 'components/Atoms/Icons/Cart';
import { StyledCount, StyledWrapper } from './styled';

const CartShowCount = ({cart}) => {
  return (
    <StyledWrapper>
        <Cart />
        <StyledCount>{cart?.length}</StyledCount>
    </StyledWrapper>
  );
};

export default CartShowCount;
