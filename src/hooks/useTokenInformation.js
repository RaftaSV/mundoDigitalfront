import { useState, useEffect } from 'react';
import { useAuth } from 'context/AuthContextCookie';

const useTokenInformation = () => {
  const [firstName, setFirstName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userType, setUserType] = useState('CLIENTE');
  const [fullName, setFullName] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const { getCookies } = useAuth();
  const token = getCookies('auth-token');

  useEffect(() => {
    if (token) {
      try {

        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        if (decodedToken && decodedToken.User.fullName) {
          const names = decodedToken.User.fullName.split(' ');
          setFirstName(names[0]);
          setFullName(decodedToken.User.fullName);
          setAddress(decodedToken.User.address);
          setPhone(decodedToken.User.phoneNumber);
          setUserId(decodedToken.User.userId);
          setUserType(decodedToken.User.userstype.userType.toString().toLocaleUpperCase());
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, [token]);

  return {
    firstName, userType, userId, fullName, address, phone
  };
};

export default useTokenInformation;

