import { useState, useEffect } from 'react';
import { useAuth } from 'context/AuthContextCookie';

const useTokenInformation = () => {
  const [firstName, setFirstName] = useState(null);
  const { getCookies } = useAuth();
  const token = getCookies('auth-token');

  useEffect(() => {
    if (token) {
      try {

        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        if (decodedToken && decodedToken.User.fullName) {
          const names = decodedToken.User.fullName.split(' ');
          setFirstName(names[0]);

        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, [token]);

  return {
    firstName
  };
};

export default useTokenInformation;
