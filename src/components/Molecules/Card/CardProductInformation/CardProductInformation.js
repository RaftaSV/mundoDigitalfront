import {StyledImg, StyleContainer, StyleText, StyleWrapper, StyledInformation, StyledImgContainer} from './style';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import useTokenInformation from 'hooks/useTokenInformation';
import modalInformation from 'components/Molecules/Modal/ModalInformation';
import useMutation from 'hooks/useMutation';
import showAlert from 'components/Atoms/SweetAlert';
import Loading from 'components/Atoms/Loading';
import {useState} from 'react';
const CardProductInformation =({productId, productName, description, price, model, urlImage}) => {
const {firstName, userId} = useTokenInformation();
const [loading, setLoading] = useState(false);

  const [createCart, {}] = useMutation(
    '/cart',
    {
      method: 'post'
    }
  )
const addCart = async () => {
 setLoading(true);
  if (firstName) {
    const data = {productId, userId}
    const result = await createCart({
      variables: {...data}
    })
    if (result?.data) {
      showAlert('', result?.data.message || 'listo' ,1000);
    }
    setLoading(false);
  } else {
  modalInformation('Debes de iniciar session para agregar productos al carrito', 'info')
  }
}


return (
  <StyleWrapper>
    <StyleText>
      <Title size={35} size_mobile={20} lineHeight={20}>{productName}</Title>
    </StyleText>
    <StyleContainer>
      <StyledImgContainer>
      <StyledImg src={urlImage}/>
        <Title  htmlTag={'h1'} color={'text'} size={30} size_mobile={20} lineHeight={10}>Precio: ${price}</Title>
       <Button color={'bgCard'} onClick={()=> {
         addCart()
       }}
               disabled={loading}
       > {loading ? <Loading /> : `agregar al carrito`}</Button>
      </StyledImgContainer>
      <StyledInformation>
        <Title size={30} size_mobile={20} lineHeight={10}>Modelo: {model}</Title>
        <Title htmlTag={'p'} size={20} size_mobile={15} lineHeight={30}>{description}</Title>
      </StyledInformation>
    </StyleContainer>
  </StyleWrapper>
)
}

export default CardProductInformation;
