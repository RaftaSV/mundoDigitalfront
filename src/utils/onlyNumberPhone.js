import { useState } from 'react';

const onlyPositiveIntegersWithHyphen = /^(6|7|2)\d{0,4}-?\d{0,4}$/;

export const useFormatPhoneNumber = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const [previousValue, setPreviousValue] = useState(initialValue);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === '' || onlyPositiveIntegersWithHyphen.test(inputValue)) {
      let formattedValue = inputValue;
      if (formattedValue.length === 5 && previousValue.length < 5 && !formattedValue.includes('-')) {
        formattedValue = formattedValue.slice(0, 4) + '-' + formattedValue.slice(4); // Agregar guion medio en el quinto caracter
      }
      setValue(formattedValue);
      setPreviousValue(formattedValue);
    }
  };

  return [value, handleChange, setValue];
};
