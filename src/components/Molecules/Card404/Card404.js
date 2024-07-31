import {Link} from 'react-router-dom';

import {ROUTES} from 'config';
import Title from 'components/Atoms/Title';
import error from './Images/code-error.png';
import Return from 'components/Atoms/Icons/Return';
import {StyleImage, StyleWrapper, StyleButtonRegresar} from './style';

const Card404 = ()  => {
  return (
    <StyleWrapper>
      <Title size={60}>Pagina no encontrada</Title>
      <Link to={ROUTES.HOME.absolutePath}>
        <StyleButtonRegresar>
          <Return/>
        </StyleButtonRegresar>
      </Link>

      <StyleImage loading="lazy" src={error} />
    </StyleWrapper>
  );
};

export default Card404;
