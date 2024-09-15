import React from 'react';
import {Feature, FeaturesSection, IconWrapper, StyledLink} from './styled';
import {Monitor, Wifi, ShoppingCart} from 'lucide-react';
import Title from '../../Atoms/Title';
import {ROUTES} from '../../../config';


const featuresSectionWelcome = () => {
  return(
    <FeaturesSection>
      <StyledLink to={ROUTES.PRODUCT.absolutePath(8)}>
      <Feature>
        <IconWrapper>
          <Monitor/>
        </IconWrapper>

        <Title size={25} size_mobile={16} lineHeight={30} htmlTag={'h3'}>Amplia Gama de PCs</Title>
        <Title size={20} size_mobile={12} lineHeight={20} htmlTag={'p'}> Desde equipos básicos hasta potentes estaciones de trabajo</Title>
        </Feature>
      </StyledLink>
      <StyledLink to={ROUTES.PRODUCT.absolutePath(5)}>
        <Feature>
          <IconWrapper>
            <Wifi/>
          </IconWrapper>
          <Title size={25} size_mobile={16} lineHeight={30} htmlTag={'h3'}>Accesorios de Red</Title>
          <Title size={20} size_mobile={12} lineHeight={20} htmlTag={'p'}>Todo lo que necesitas para una conectividad perfecta</Title>
        </Feature>
      </StyledLink>
      <StyledLink to={ROUTES.HOME.absolutePath}>
      <Feature>
        <IconWrapper>
          <ShoppingCart/>
        </IconWrapper>
        <Title size={25} size_mobile={16} lineHeight={30} htmlTag={'h3'}>Compra Fácil</Title>
        <Title size={20} size_mobile={12} lineHeight={20} htmlTag={'p'}>Proceso de compra sencillo y envío rápido</Title>
        <Title size={20} size_mobile={12} lineHeight={20} htmlTag={'p'}>click para ver todas las categorias</Title>
      </Feature>
      </StyledLink>
    </FeaturesSection>
  )
}

export default featuresSectionWelcome;
