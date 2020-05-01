import React from 'react';
import './app.scss';
import Footer from './footer/Footer';
import Header from './header/Header';
import News from '../news/News';
import TalentCalculator from '../talent-calculator/TalentCalculator';
import NavBar from './nav-bar/NavBar';

const App = () => {
  return (
    <div className="app">
      <div className="app__centered-content">
        <Header />
        <NavBar />
        <News />
        <TalentCalculator />
        <Footer />
      </div>
    </div>
  );
};

export default App;
