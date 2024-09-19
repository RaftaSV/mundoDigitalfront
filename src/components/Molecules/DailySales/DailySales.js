import Title from 'components/Atoms/Title';
import { StyleWrapper } from './style';
import Loader from 'components/Molecules/Loader';
const DailySales = ({ title, value }) => {
  return (
      <StyleWrapper>
        <Title size={17}>{title}</Title>
        <Title size={17}>${value}</Title>
      </StyleWrapper>
  );
};

export default DailySales;
