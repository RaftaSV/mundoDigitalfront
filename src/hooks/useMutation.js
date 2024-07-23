import axios from 'axios';
import config from 'config';
import { useState, useCallback, useMemo } from 'react';
import showAlert from '../components/Atoms/SweetAlert';
import { useAuth } from 'context/AuthContextCookie';

const { baseUrl } = config;
const defaultOptions = {
  method: 'post', // post | put | delete,
  variables: null,
  refresh: null,
  headers: {}
};

const useMutation = (url, opts = defaultOptions) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [status, setStatus] = useState(null);
  const { getCookies } = useAuth();

  const optsResolve = useMemo(() => {
    return {
      ...defaultOptions,
      ...opts
    };
  }, [opts]);

  const mutationFunc = useCallback(
    async (optsFunc = {}, id = '') => {
      const options = {
        ...optsResolve,
        ...optsFunc
      };

      setLoading(true);

      try {
        const token = getCookies('auth-token');
        const path = `${baseUrl}${url}/${id}`;
        const config =
          options.method === 'delete'
            ? [{ data: options.variables, headers: { ...options.headers, Authorization: token } }]
            : [options.variables, { headers: { ...options.headers, Authorization: token } }];

        const response = await axios[options.method](path, ...config);
        const { data, status } = response;
        setData(data);
        setStatus(status);
        setLoading(false);

        if (options.refresh && typeof options.refresh === 'function') {
          setTimeout(async () => {
            await options.refresh();
          }, 500);
        }

        return { data, status, loading: false, errors: null };
      } catch (err) {
        console.log(err);
        showAlert('', err.response?.data?.message);
        setErrors(err);
        setData(null);
        setStatus(err.response?.status || null);
        setLoading(false);
        return { data: null, status: err.response?.status || null, loading: false, errors: err };
      }
    },
    [url, optsResolve]
  );

  return [mutationFunc, { loading, data, errors, status }];
};

export default useMutation;
