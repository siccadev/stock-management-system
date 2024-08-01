import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalStockItems: 0,
    lowStockAlerts: 0,
    pendingInterventions: 0,
    unpaidInvoices: 0,
  });

  useEffect(() => {
    // Fetch stats data from the backend
    const fetchStats = async () => {
      const response = await fetch('/api/stats');
      const data = await response.json();
      setStats(data);
    };

    fetchStats();
  }, []);

  return (
    <div className="dashboard">
      <div className="stats">
        <div className="stat-card">Total Stock Items: {stats.totalStockItems}</div>
        <div className="stat-card">Low Stock Alerts: {stats.lowStockAlerts}</div>
        <div className="stat-card">Pending Interventions: {stats.pendingInterventions}</div>
        <div className="stat-card">Unpaid Invoices: {stats.unpaidInvoices}</div>
      </div>
      <div className="quick-actions">
        <button>Add New Stock Item</button>
        <button>Generate Intervention Sheet</button>
        <button>Create Invoice</button>
      </div>
    </div>
  );
};

export default Dashboard;
