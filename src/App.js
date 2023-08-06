import React from 'react';
import './App.css';
import reveal from './scroll.js'
import NavBar from './components/NavBar.jsx';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import PortfolioStack from './components/PortfolioStack.jsx';
import DirectContact from './components/DirectContact.jsx';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    reveal();
  });

  return (
    <div className="App">
      <NavBar />
      <Header />
      <AboutMe />
      <PortfolioStack />
      <DirectContact />
    </div>
  );
}

export default App;
