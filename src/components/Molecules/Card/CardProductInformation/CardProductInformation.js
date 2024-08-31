import {
  StyledImg,
  StyleContainer,
  StyleText,
  StyleWrapper,
  StyledInformation,
  StyledImgContainer,
  StyledAddCart
} from './style';
import { ShoppingCart } from 'lucide-react';
import Title from 'components/Atoms/Title';
import useTokenInformation from 'hooks/useTokenInformation';
import modalInformation from 'components/Molecules/Modal/ModalInformation';
import useMutation from 'hooks/useMutation';
import showAlert from 'components/Atoms/SweetAlert';
import Loading from 'components/Atoms/Loading';
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import useQuery from 'hooks/useQuery';

const CardProductInformation = ({ productId, productName, description, price, model, urlImage }) => {
  const { firstName, userId } = useTokenInformation();
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();

  const [createCart] = useMutation('/carts', { method: 'post' });
  const { data: cartUser, refresh } = useQuery(`/carts/${userId}`);

  useEffect(() => {
    if (cartUser && cartUser?.cartUser.length > 0) {
      cookies.set(`cart`, cartUser, { path: '/', maxAge: 86400 });
      setLoading(false);
    }
  }, [cartUser]);

  const addCart = async () => {
    setLoading(true);
    if (firstName) {
      const data = { productId, userId };
      const result = await createCart({
        variables: { ...data },
      });
      if (result?.data) {
        showAlert('', result?.data.message || 'Listo', 1000);
        cookies.set('cart', result?.data.cartUser, { path: '/', maxAge: 86400 }); // Set the cart cookie with the new data
      }
      await refresh();
    } else {
      modalInformation('Debes de iniciar sesión para agregar productos al carrito', 'info');
    }
    setLoading(false);
  };

  return (
    <StyleWrapper>
      <StyleText>
        <Title size={35} size_mobile={20} lineHeight={20}>{productName}</Title>
      </StyleText>
      <StyleContainer>
        <StyledImgContainer>
          <StyledImg src={urlImage} />
          <Title htmlTag={'h1'} color={'text'} size={30} size_mobile={20} lineHeight={10}>Precio: ${price}</Title>
          <StyledAddCart color={'bgCard'} onClick={addCart} disabled={loading}>
            {loading ? <Loading /> : <Title size={17} htmlTag={'p'}>Agregar al carrito</Title>}
            <ShoppingCart />
          </StyledAddCart>
        </StyledImgContainer>
        <StyledInformation>
          <Title size={30} size_mobile={20} lineHeight={10}>Modelo: {model}</Title>
          <Title htmlTag={'p'} size={20} size_mobile={15} lineHeight={30}>{description}</Title>
        </StyledInformation>
      </StyleContainer>
    </StyleWrapper>
  );
};

export default CardProductInformation;
