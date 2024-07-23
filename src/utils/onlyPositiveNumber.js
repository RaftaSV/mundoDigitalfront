// hook para validar solo numeros positivos
import { useState } from 'react';

const positiveIntegers = /^[0-9]+$/;

export const usePositiveIntegers = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue === '' || (positiveIntegers.test(inputValue) && parseInt(inputValue) >= 0)) {
      setValue(inputValue);
    }
  };

  return [value, handleChange, setValue, positiveIntegers.test(value) && parseInt(value) >= 0];
};
