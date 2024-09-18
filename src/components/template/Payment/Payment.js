import {StyleWrapper} from './styled';
import ContainerProductsCart from '../../Organisms/ContainerProductsCart';
import ContainerPay from '../../Organisms/ContainerPay';
import {useCart} from '../../../context/CartContext';
import {useEffect, useState} from 'react';

const Payment = () => {
  const { cart } = useCart();
  const { updateCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0.00);

  useEffect(() => {
    const newTotal = cart?.reduce((sum, item) => {
      const price = item?.product?.price || 0;
      return parseFloat(sum) + parseFloat(price);
    }, 0)
    setTotalPrice(newTotal.toFixed(2));
  }, [cart]);
  return (
    <StyleWrapper>
      <ContainerProductsCart cart={cart} updateCart={updateCart} totalPrice={totalPrice}/>
      <ContainerPay cart={cart} updateCart={updateCart} totalPrice={totalPrice} />
    </StyleWrapper>
  )
}

export default Payment;
