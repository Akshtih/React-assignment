// src/components/UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  let { userId } = useParams();
  const style = {
    textAlign: 'center',
  };

  return <h3 style={style}>User Profile Page for User ID: {userId}</h3>;
};

export default UserProfile;
