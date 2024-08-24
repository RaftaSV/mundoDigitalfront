import { useState } from 'react';

const onlyPositiveIntegersWithTwoDecimals = /^[0-9]+(\.[0-9]{0,2})?$/;
export const usePositiveIntegersWithTwoDecimals = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === '' || onlyPositiveIntegersWithTwoDecimals.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return [value, handleChange,setValue, onlyPositiveIntegersWithTwoDecimals.test(value)];
};
