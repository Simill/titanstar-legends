import React from 'react';
import News from '../news/News';
import { MAX_TALENT_POINTS, TALENT_PATH_DATA } from '../shared/constants';
import talentsMap from '../shared/data/talentsMap';
import TalentCalculator from '../talent-calculator/TalentCalculator';
import './app.scss';
import Footer from './footer/Footer';
import Header from './header/Header';
import NavBar from './nav-bar/NavBar';

/**
 * The main App component where the magic happens. This puts together the main skeleton of our app.
 * @returns the App component.
 */
const App = () => {
  return (
    <div className="app">
      <div className="app__centered-content">
        <Header />
        <NavBar />
        <News />
        <TalentCalculator
          talentsMap={talentsMap}
          talentPathData={TALENT_PATH_DATA}
          maxTalentPoints={MAX_TALENT_POINTS}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;
