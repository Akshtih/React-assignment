// src/components/Dashboard.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const style = {
    textAlign: 'center',
  };

  const linkStyle = {
    display: 'inline-block',
    margin: '10px',
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
  };

  return (
    <div style={style}>
      <h2>Dashboard</h2>
      <Link to="profile" style={linkStyle}>Profile</Link>
      <Link to="settings" style={linkStyle}>Settings</Link>
      <Outlet />
    </div>
  );
};

export default Dashboard;
