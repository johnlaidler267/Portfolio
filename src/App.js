import './App.css';
import Header from './components/Header.tsx';
import AboutMe from './components/AboutMe.tsx';
import PortfolioStack from './components/PortfolioStack.tsx';
import DirectContact from './components/DirectContact.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <PortfolioStack />
      <DirectContact />
    </div>
  );
}

export default App;
