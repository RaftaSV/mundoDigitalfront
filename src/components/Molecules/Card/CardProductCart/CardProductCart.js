import {
  StyledButton,
  StyledCard,
  StyledImg,
  StyledPrice,
  StyledText,
} from './styled';
import Title from '../../../Atoms/Title';
import {Trash2} from 'lucide-react';
import React from 'react';

export const  CardProductCart = ({cartId, product , handleDeleteCart }) =>{
  return (
        <StyledCard>
          <StyledImg
            src={product.urlImage}
            alt={product.productName || 'Product Images'}
          />
          <StyledText>
            <Title htmlTag="p" size={17} size_mobile={13}>
              {product.productName}
            </Title>
          </StyledText>
          <StyledPrice>
            <Title htmlTag="p" size={17} size_mobile={13}>
              ${product.price}
            </Title>
          </StyledPrice>
          <StyledButton onClick={() => handleDeleteCart(cartId)}>
            <Trash2 color="red" />
          </StyledButton>
        </StyledCard>
  )
}

export default  CardProductCart;
