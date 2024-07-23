import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;

const useQuery = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  const getData = useCallback(async () => {
    const cookies = new Cookies();
    const token = cookies.get('auth-token');
    const config = {
      headers: { Authorization: token }
    };
    setLoading(true);
    setErrors(null); // Limpiar errores anteriores
    setData(null); // Limpiar datos anteriores
    try {
      const { data } = await axios.get(`${baseUrl}${url}/`, config);
      setData(data);
    } catch (err) {
      setErrors(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { loading, data, errors, refresh: getData };
};

export default useQuery;
