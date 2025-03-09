import { useState, useEffect, useRef } from 'react'
import Home from './pages/Home';
import Landing from './pages/Landing';
import config from './data/Config';

function App() {
  const [hasEntered, setHasEntered] = useState(config.autoEnter); 

  const enterSite = () => {
    window.removeEventListener('click', enterSite);
    setHasEntered(true);
  };


  useEffect(() => {
    if (!config.autoEnter) {
      window.addEventListener('click', enterSite);
    }

    return () => {
    };
  }, []);

  return (
    <>
      {hasEntered ? <Home /> : <Landing />}
    </>
  )
}

export default App
