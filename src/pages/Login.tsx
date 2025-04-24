
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PinLogin from '@/components/PinLogin';

const Login = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if already authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated) {
      navigate('/');
    }
  }, [navigate]);
  
  return <PinLogin />;
};

export default Login;
