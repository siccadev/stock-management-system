import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import MainFeatures from './components/MainFeatures';
import Footer from './components/Footer';
import StockManagement from './components/StockManagement';
import Interventions from './components/Interventions';
import Billing from './components/Billing';
import UserManagement from './components/UserManagement';
import HomePage from './pages/HomePage';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Banner />
            <Dashboard />
            <MainFeatures />
          </>
        );
      case 'stock':
        return <StockManagement />;
      case 'interventions':
        return <Interventions />;
      case 'billing':
        return <Billing />;
      case 'users':
        return <UserManagement />;
      default:
        return (
          <>
            <Banner />
            <Dashboard />
            <MainFeatures />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
