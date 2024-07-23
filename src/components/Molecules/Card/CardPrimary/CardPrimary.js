import Title from 'components/Atoms/Title';
import {StyleImage, StyleWrapper} from './style';


const CardMain = ({ image, name }) => {
  return (
    <StyleWrapper>
      <StyleImage src={image}/>
      <Title size={25}
             htmlTag={'h1'}
             size_mobile={18}
      >{name}</Title>
    </StyleWrapper>
  );
};

export default CardMain
