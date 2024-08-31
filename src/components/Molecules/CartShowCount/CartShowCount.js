import { useState, useEffect } from 'react';
import Cart from 'components/Atoms/Icons/Cart';
import {useAuth} from 'context/AuthContextCookie';
import {StyledCount, StyledWrapper} from './styled';
import useModal from '../../../hooks/useModal';
import ModalCart from '../Modal/ModalCart';
import ModalCategory from '../Modal/ModalCategory';



const CartShowCount =  () => {
  const { getCookies } = useAuth();
  const token = getCookies('cart');
  const [count, setCount] = useState(0);
  const { visible, onToggle } = useModal();

  useEffect(() => {
    setCount(token?.length);
  }, [token]);
  return (
    <StyledWrapper onClick={()=> {
      onToggle()
    }} isOpen={visible}>
      <Cart/>
      <StyledCount>
        {count}
      </StyledCount>
     <ModalCart onCancel={onToggle}  isOpen={visible} onClose={onToggle} />
    </StyledWrapper>
  )
}

export default CartShowCount;
