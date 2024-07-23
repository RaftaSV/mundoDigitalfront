import Title from 'components/Atoms/Title';
import {StyleImage, StyleWrapper} from './style';


const CardCategories = ({ image, name,onEdit,onRemove, ...restProps}) => {

  return (
    <StyleWrapper>
      <StyleImage src={image}/>
      <Title size={25} size_mobile={20}>{name}</Title>
    </StyleWrapper>
  );
};

export default CardCategories
