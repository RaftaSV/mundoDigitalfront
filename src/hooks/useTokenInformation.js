import { useState, useEffect } from 'react';
import { useAuth } from 'context/AuthContextCookie';

const useTokenInformation = () => {
  const [tokenData, setTokenData] = useState(null);
  const { getCookies } = useAuth();
  const token = getCookies('auth-token');

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        setTokenData(decodedToken);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, [token]);

  return {
    userType: tokenData?.User?.users_type?.user_type.toString().toUpperCase() || '',
    branchId: tokenData?.User?.branch?.branch_id || null,
    branchName: tokenData?.User?.branch?.branch_name || '',
    numberPhone: tokenData?.User?.branch?.branch_number_phone || '',
    location: tokenData?.User?.branch?.branch_location || '',
    userName: tokenData?.User?.user_name || '',
    userId: tokenData?.User?.user_id || ' ',
  };
};

export default useTokenInformation;
