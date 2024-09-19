import { StyledHeader, StyledItems, StyledItemsWrapper, StyleTotal, StyleWrapper } from './styled';
import Title from '../../Atoms/Title';
import React, { useState } from 'react';
import { Info, CreditCard, Truck, Phone, User } from 'lucide-react';
import Input from '../../Atoms/Input';
import Button from '../../Atoms/Button';
import useTokenInformation from '../../../hooks/useTokenInformation';
import useMutation from '../../../hooks/useMutation';
import showAlert from '../../Atoms/SweetAlert';
import { useNavigate } from 'react-router-dom';
import Loading from 'components/Atoms/Loading';
import { ROUTES } from 'config';

const ContainerPay = ({ cart, updateCart, totalPrice }) => {
  const { fullName, address, phone, userId } = useTokenInformation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [errors, setErrors] = useState({});
  const [createInvoice] = useMutation(
    '/invoices',
    {
      method: 'post',
      refresh: async () => {
        updateCart([]);
      },
    }
  );

  const validate = () => {
    const newErrors = {};
    const cardNumberWithoutSpaces = formData.cardNumber.replace(/\s+/g, '');

    if (!formData.cardNumber || cardNumberWithoutSpaces.length !== 16) {
      newErrors.cardNumber = 'Número de tarjeta inválido';
    }
    if (!formData.expiryDate) newErrors.expiryDate = 'Fecha de expiración es requerida';
    if (!formData.cvv) newErrors.cvv = 'CVV es requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limpiar los errores al escribir
    setErrors({
      ...errors,
      [name]: ''
    });

    if (name === 'cardNumber') {
      // Eliminar todo lo que no sea dígito
      const sanitizedValue = value.replace(/\D/g, '');

      // Limitar a 16 dígitos (sin contar los espacios)
      let newValue = sanitizedValue.slice(0, 16);

      // Formatear con espacio cada 4 dígitos
      newValue = newValue.match(/.{1,4}/g)?.join(' ') || newValue;

      setFormData({
        ...formData,
        cardNumber: newValue
      });
    } else if (name === 'expiryDate') {
      // Formatear la fecha MM/YY
      let newValue = value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
      if (newValue.length === 1 && parseInt(newValue) > 1) {
        newValue = `0${newValue}`; // Añadir el 0 al inicio si es un número > 1
      }
      if (newValue.length > 2) {
        newValue = `${newValue.slice(0, 2)}/${newValue.slice(2, 4)}`; // Agregar la barra después del segundo número
      }
      setFormData({ ...formData, [name]: newValue });
    } else if (name === 'cvv') {
      // Solo permitir números en el CVV y limitar a 3 o 4 caracteres
      const sanitizedValue = value.replace(/\D/g, '').slice(0, 4);
      setFormData({ ...formData, [name]: sanitizedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  console.log(cart.length)

  const handleSend = async () => {
    if (!validate()) return;
    if (cart.length !==0) {
    setIsLoading(true);
    const result = await createInvoice({
      variables: {
        userId,
        cart,
        totalPrice
      }
    });
    if (result?.data) {
      showAlert('', result?.data.message || 'Listo', 1500);
      setIsLoading(false);
      setTimeout(() => {
        navigate(ROUTES.HOME.absolutePath);
      }, 500);
    }}
    else {
      showAlert('', 'No se pudo enviar la compra no tienes productos en el carrito', 1500);
    }
  };

  return (
    <StyleWrapper>
      <StyledHeader>
        <Info />
        <Title size={20} size_mobile={18} lineHeight={48} style={{ fontFamily: 'old london' }}>
          Información de envío y pago
        </Title>
      </StyledHeader>
      <StyledItemsWrapper>
        <StyledItems>
          <User />
          <Title size={17} size_mobile={14} style={{ fontFamily: 'old london' }} lineHeight={20}>Cliente</Title>
        </StyledItems>
        <Title size={17} size_mobile={14} style={{ fontFamily: 'old london' }}  lineHeight={15} htmlTag={'p'}>{fullName}</Title>
      </StyledItemsWrapper>
      <StyledItemsWrapper>
        <StyledItems>
          <Truck />
          <Title size={17} size_mobile={14} style={{ fontFamily: 'old london' }} lineHeight={20}>Dirección de entrega</Title>
        </StyledItems>
        <Title size={17} size_mobile={14} style={{ fontFamily: 'old london' }}  lineHeight={15} htmlTag={'p'}>{address}</Title>
      </StyledItemsWrapper>
      <StyledItemsWrapper>
        <StyledItems>
          <Phone />
          <Title size={17} size_mobile={14} style={{ fontFamily: 'old london' }} lineHeight={20}>Teléfono</Title>
        </StyledItems>
        <Title size={17} size_mobile={14} style={{ fontFamily: 'old london' }}  lineHeight={15} htmlTag={'p'}>{phone}</Title>
      </StyledItemsWrapper>
      <StyledItemsWrapper>
        <StyledItems>
          <CreditCard />
          <Title size={17} size_mobile={14} style={{ fontFamily: 'old london' }}  lineHeight={15} htmlTag={'p'}>Número de tarjeta</Title>
        </StyledItems>
        <Input
          placeholder="4544 3332 2222 1111"
          size={375}
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
        {errors.cardNumber && <span>{errors.cardNumber}</span>}
      </StyledItemsWrapper>
      <StyledItemsWrapper>
        <StyledItems>
          <Title size={17} size_mobile={14} style={{ fontFamily: 'old london' }}  lineHeight={15} htmlTag={'p'}>Fecha de expiración</Title>
        </StyledItems>
        <Input
          placeholder="MM/YY"
          size={100}
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          required
        />
        {errors.expiryDate && <span>{errors.expiryDate}</span>}
      </StyledItemsWrapper>
      <StyledItemsWrapper>
        <StyledItems>
          <Title size={17} size_mobile={14} style={{ fontFamily: 'old london' }} lineHeight={15} htmlTag={'p'}>CVV</Title>
        </StyledItems>
        <Input
          placeholder="CVV"
          size={100}
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          required
        />
        {errors.cvv && <span>{errors.cvv}</span>}
      </StyledItemsWrapper>
      <StyleTotal>
        <Button style={{ width: '100%', borderRadius: '10px' }} color={'background'} onClick={handleSend} disabled={isLoading}>
          {isLoading ? <Loading /> : 'Realizar pedido'}
        </Button>
      </StyleTotal>
    </StyleWrapper>
  );
};

export default ContainerPay;
