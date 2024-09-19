import { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const useLatAmDate = () => {
  const [latAmDate, setLatAmDate] = useState(moment().tz('America/El_Salvador'));

  useEffect(() => {
    const updateLatAmDate = () => {
      setLatAmDate(moment().tz('America/El_Salvador'));
    };

    // Actualizar la fecha cada segundo
    const intervalId = setInterval(updateLatAmDate, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  // Formatear la fecha al formato 'YYYY-MM-DD'
  const formattedDate = latAmDate.format('YYYY-MM-DD');

  return formattedDate;
};

export default useLatAmDate;
