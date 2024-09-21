import Title from 'components/Atoms/Title';
import {StyleWrapper, StyleIcon} from './style';
const InfoCard = ({ title, value, description,children, color='text'}) => {
  return (
      <StyleWrapper>
        <StyleIcon
          $color={color}
        >
          {children}
        </StyleIcon>
        <Title size={17} size_mobile={16} lineHeight={40}>{title}</Title>
        <Title size={19} lineHeight={26}>{value}</Title>
        <Title size={15} htmlTag={'p'} lineHeight={30}>{description}</Title>
      </StyleWrapper>
  );
};

export default InfoCard;
