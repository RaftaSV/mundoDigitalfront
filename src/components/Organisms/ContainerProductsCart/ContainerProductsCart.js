import CardProductCart from 'components/Molecules/Card/CardProductCart';
import {useCart} from 'context/CartContext';
import {StyledHeader, StyleTotal, StyleWrapper, StyleWrapperCard} from './styled';
import Title from '../../Atoms/Title';
import showAlert from '../../Atoms/SweetAlert';
import React, {useEffect, useState} from 'react';
import useMutation from 'hooks/useMutation';
import {ShoppingCart} from 'lucide-react';

const ContainerProductsCart = ({cart=[], updateCart, totalPrice}) => {

  const [deleteCart] = useMutation(`/carts`, { method: 'delete' });

  const handleDeleteCart = async (cartId) => {
    try {
      const result = await deleteCart({}, cartId);
      if (result?.data) {
        showAlert('', result?.data.message || 'Listo', 1000);
        updateCart(result.data.cartUser);
      }
    } catch (error) {
      console.error("Error al eliminar el carrito:", error);
      showAlert('Error', 'No se pudo eliminar el carrito', 2000);
    }
  };


  return (
    <StyleWrapper>
      <StyledHeader>
        <ShoppingCart/>
        <Title size={20} size_mobile={18} lineHeight={48} style={{fontFamily: 'old london'}}>Resumen del carrito</Title>
      </StyledHeader>

      {cart?.length > 0 ? (
        <StyleWrapperCard>
          {
            cart?.map(({ cartId, product }) => (
              <CardProductCart
                key={cartId}
                cartId={cartId} product={product}  handleDeleteCart={handleDeleteCart} />
            ))
          }
        </StyleWrapperCard>
      ) : (
        <Title size={20} size_mobile={18} lineHeight={48} style={{fontFamily: 'old london'}}>No hay productos en el carrito</Title>
      )}
      <StyleTotal>
        <Title size={20} size_mobile={18} lineHeight={48} style={{fontFamily: 'old london'}}>Total</Title>
        <Title size={20} size_mobile={18} lineHeight={48} style={{fontFamily: 'old london'}}>${totalPrice}</Title>
      </StyleTotal>
    </StyleWrapper>
  )
}


export default ContainerProductsCart;


