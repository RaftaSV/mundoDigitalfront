import {StyleDate, StyleWrapper} from './style';
const DateAtom = ({...props }) => {
  return (
    <StyleWrapper>
    <StyleDate
      type="date"
      {...props}
    />
    </StyleWrapper>
  );
};

export default DateAtom;
