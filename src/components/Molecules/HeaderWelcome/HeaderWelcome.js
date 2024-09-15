import React from 'react';
import {
  HeaderSection,
  StyledImage, StyledImageContainer,
  StyledWrapper
} from './styled'
import Title from '../../Atoms/Title';

export const CardHeaderWelcome = () => {
  return (
    <StyledWrapper>
      <HeaderSection>
        <Title size={45} size_mobile={20} lineHeight={30}>Bienvenido a Mundo Digital</Title>
        <br/>
        <Title size={20} size_mobile={16} htmlTag={'p'} lineHeight={20}>Todo para PC y accesorios de redes en un solo lugar</Title>
      </HeaderSection>
      <StyledImageContainer>
        <StyledImage src="logo.png"/>
      </StyledImageContainer>
    </StyledWrapper>

  )
}

export default CardHeaderWelcome;
