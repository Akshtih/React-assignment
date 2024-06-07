// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  const style = {
    textAlign: 'center',
  };

  const handleLogin = () => {
    // Perform login logic here
    navigate('/');
  };

  return (
    <div style={style}>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
