import Title from 'components/Atoms/Title';

import {StyleImage, StyleWrapper} from './style';
import {Link} from 'react-router-dom';
import {ROUTES} from 'config';


const CardCategories = ({ image, name,onEdit,onRemove,categoryId, ...restProps}) => {

  return (
    <Link to={ROUTES.PRODUCT.absolutePath(categoryId)}>
    <StyleWrapper>
      <StyleImage src={image}/>
      <Title size={25} size_mobile={20}>{name}</Title>
    </StyleWrapper>
    </Link>
  );
};

export default CardCategories
