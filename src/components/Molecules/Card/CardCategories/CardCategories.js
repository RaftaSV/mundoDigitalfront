import Title from 'components/Atoms/Title';

import {StyleImage, StyleWrapper} from './style';
import {Link} from 'react-router-dom';
import {ROUTES} from 'config';
import ButtonEditAndDelete from 'components/Molecules/ButtonEditAndDelete';


const CardCategories = ({ image, name,onEdit,onRemove,categoryId, ...restProps}) => {

  return (
    <Link to={ROUTES.PRODUCT.absolutePath(categoryId)}>
    <StyleWrapper>
      <ButtonEditAndDelete onEdit={onEdit} onRemove={onRemove}/>
      <StyleImage src={image}/>
      <Title  htmlTag={'p'} size={20} size_mobile={15}>{name}</Title>
    </StyleWrapper>
    </Link>
  );
};

export default CardCategories
