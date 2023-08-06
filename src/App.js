import './App.css';
import NavBar from './components/NavBar.tsx';
import Header from './components/Header.tsx';
import AboutMe from './components/AboutMe.tsx';
import PortfolioStack from './components/PortfolioStack.tsx';
import DirectContact from './components/DirectContact.tsx';
import './scroll.js'

function App() {
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
