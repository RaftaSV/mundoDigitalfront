import { StyledSelect,customStyles } from './style';

const Select = ({ options = [], className = '', ...props }) => {
  return (
      <StyledSelect
        className={`react-select-wrapper ${className}`}
        classNamePrefix="react-select"
        options={options}
        isSearchable={false}
        {...props}
      />
  );
};

export default Select;
