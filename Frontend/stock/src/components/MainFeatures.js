import React from 'react';
import './MainFeatures.css';

const MainFeatures = ({ setCurrentPage }) => (
  <div className="main-features">
    <div className="feature">
      <h2>Stock Management</h2>
      <p>Manage your stock items with real-time tracking and QR code integration.</p>
      <button onClick={() => setCurrentPage('stock')}>Manage Stock</button>
    </div>
    <div className="feature">
      <h2>Interventions</h2>
      <p>Generate and track intervention sheets automatically.</p>
      <button onClick={() => setCurrentPage('interventions')}>View Interventions</button>
    </div>
    <div className="feature">
      <h2>Billing</h2>
      <p>Create and manage invoices and payments.</p>
      <button onClick={() => setCurrentPage('billing')}>Manage Billing</button>
    </div>
    <div className="feature">
      <h2>User Management</h2>
      <p>Manage user roles and account settings.</p>
      <button onClick={() => setCurrentPage('users')}>Manage Users</button>
    </div>
  </div>
);

export default MainFeatures;
