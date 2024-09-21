import Title from 'components/Atoms/Title';
import {StyleIcon, StyleWrapper} from './style';
const InfoCardDaily = ({ title, value, children, color }) => {
  return (
      <StyleWrapper>
        <StyleIcon
        $color={color}
        >
          {children}
        </StyleIcon>
        <Title size={17}>{title}</Title>
        <Title size={17}>${value}</Title>
      </StyleWrapper>
  );
};

export default InfoCardDaily;
