import React from 'react';
import './Header.css';

const Header = ({ setCurrentPage }) => (
  <header className="header">
    <div className="logo">Stock Management</div>
    <nav className="nav">
      <span onClick={() => setCurrentPage('home')}>Home</span>
      <span onClick={() => setCurrentPage('stock')}>Stock Management</span>
      <span onClick={() => setCurrentPage('interventions')}>Interventions</span>
      <span onClick={() => setCurrentPage('billing')}>Billing</span>
      <span onClick={() => setCurrentPage('users')}>User Management</span>
    </nav>
    <div className="user-profile">
      <img src="profile-pic-url" alt="User" />
      <div className="dropdown">
        <span>User Name</span>
        <div className="dropdown-content">
          <span>Profile</span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
