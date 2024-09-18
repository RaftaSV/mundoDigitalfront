

import HeaderWelcome from '../../Molecules/HeaderWelcome/HeaderWelcome';
import FeaturesSectionWelcome from '../../Molecules/FeaturesSectionWelcome/FeaturesSectionWelcome';
import React from 'react';
import {Footer} from './styled';
import {TITLE} from 'components/Molecules/Modal/ModalUser/style';

document.title = 'Bienvenido';
export const Welcome = () => {
  return (
    <>
      <HeaderWelcome/>
      <FeaturesSectionWelcome/>
      <Footer>
        <TITLE size={20} size_mobile={15} lineHeight={30} htmlTag={'p'}>© 2024 Mundo Digital. Todos los derechos reservados.</TITLE>
      </Footer>
    </>
  )
}

export default Welcome;
