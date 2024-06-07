// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import UserProfile from './components/UserProfile';
import Search from './components/Search';
import Login from './components/Login';

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const navStyle = {
    marginBottom: '20px',
  };

  const ulStyle = {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    gap: '10px',
  };

  const liStyle = {
    display: 'inline',
  };

  const linkStyle = {
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
  };

  const linkHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <Router>
      <div style={appStyle}>
        <nav style={navStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <Link to="/" style={linkStyle} onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)} onMouseOut={(e) => (e.target.style.backgroundColor = linkStyle.backgroundColor)}>
                Home
              </Link>
            </li>
            <li style={liStyle}>
              <Link to="/about" style={linkStyle} onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)} onMouseOut={(e) => (e.target.style.backgroundColor = linkStyle.backgroundColor)}>
                About
              </Link>
            </li>
            <li style={liStyle}>
              <Link to="/dashboard" style={linkStyle} onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)} onMouseOut={(e) => (e.target.style.backgroundColor = linkStyle.backgroundColor)}>
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
        <div style={{ textAlign: 'center' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/user/:userId" element={<UserProfile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/old-path" element={<Navigate to="/new-path" />} />
            <Route path="*" element={<h2 style={{ textAlign: 'center' }}>404 Page Not Found</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
