import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

const { baseUrl } = config;

const usePageViews = () => {
  const location = useLocation();
  const registeredPaths = useRef(new Set());
  const debounceTimeout = useRef(null);

  useEffect(() => {
    const path = location.pathname;
    const pageViewKey = `pageView_${path}`;

    if (!sessionStorage.getItem(pageViewKey)) {
      const pageViewData = {
        pageUrl: window.location.href,
        pageTitle: document.title,
      };

      const registerPageView = async () => {
        try {
          await axios.post(`${baseUrl}/pageview`, pageViewData);
          registeredPaths.current.add(path);
          console.log('insertando pageview');
          sessionStorage.setItem(pageViewKey, 'true');
        } catch (error) {
          console.error('Error registrando la vista de la página:', error);
        }
      };

      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(registerPageView, 300); // 300ms debounce
    }
  }, [location]);
};

export default usePageViews;
