import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Dashboard from '../components/Dashboard';
import MainFeatures from '../components/MainFeatures';
import Footer from '../components/Footer';


const HomePage = () => (
  <div className="home-page">
    <Header />
    <Banner />
    <Dashboard />
    <MainFeatures />
    <Footer />
  </div>
);

export default HomePage;