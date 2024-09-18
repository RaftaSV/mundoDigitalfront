import React, { useState, useEffect } from 'react';
import Modal from 'components/Atoms/ModalCart';
import { StyleWrapper, TotalPriceWrapper } from './style';
import Title from 'components/Atoms/Title';
import useMutation from 'hooks/useMutation';
import showAlert from 'components/Atoms/SweetAlert';
import { useCart } from 'context/CartContext';
import CardProductCart from '../../Card/CardProductCart/CardProductCart';
import {Link} from 'react-router-dom';
import Button from '../../../Atoms/Button';
import {ROUTES} from '../../../../config';

const ModalCart = ({
                     isOpen,
                     isUpdate = false,
                     onCancel,
                     cart = {}
                   }) => {
  const { updateCart } = useCart();

  const { cartUser = [] } = cart;
  const [totalPrice, setTotalPrice] = useState(0.00);
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

  // Efecto para recalcular el total cada vez que el carrito cambie
  useEffect(() => {
    const newTotal = cartUser.reduce((sum, item) => {
      const price = item?.product?.price || 0; // Asegurar que el precio exista
      return parseFloat(sum) + parseFloat(price);
    }, 0)
    setTotalPrice(newTotal); // Actualizar el estado del total
  }, [cartUser]); // Se ejecuta cada vez que cambie cartUser

  return (
    <Modal
      width={500}
      isOpen={isOpen}
      onCancel={onCancel}
    >
      <StyleWrapper>
        {cartUser.length > 0 ? (
          <>
            {cartUser?.map(({ cartId, product }) => (
                  <CardProductCart
                    key={cartId}
                    cartId={cartId} product={product}  handleDeleteCart={handleDeleteCart} />
                )
              )
            }
            <TotalPriceWrapper>
              <Title htmlTag="p" size={20} size_mobile={16}>
                Total: ${parseFloat(totalPrice).toFixed(2)}
              </Title>
              <Link to={ROUTES.PAYMENT_PRODUCTS.absolutePath}>
                <Button color={'bgModal'} style={{
                  width: '130px'
                }}>Pagar</Button>
              </Link>
            </TotalPriceWrapper>
          </>
        ) : (
          <Title htmlTag="p" size={17} size_mobile={13}>
            No tienes nada agregado a tu carrito
          </Title>
        )}
      </StyleWrapper>
    </Modal>
  );
};

export default ModalCart;
