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

export const  CardDailyBook = ({urlImage, productName, price, cost}) =>{
  return (
        <StyledCard>
          <StyledImg
            src={urlImage}
          />
          <StyledText>
            <Title htmlTag="p" size={17} size_mobile={13}>
              {productName}
            </Title>
          </StyledText>
          <StyledPrice>
            <Title htmlTag="p" size={17} size_mobile={13}>
              ${price}
            </Title>
          </StyledPrice>
          <StyledPrice>
            <Title htmlTag="p" size={17} size_mobile={13}>
              ${cost}
            </Title>
          </StyledPrice>
        </StyledCard>
  )
}

export default  CardDailyBook;
