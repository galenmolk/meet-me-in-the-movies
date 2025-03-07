import { useState, useEffect, useRef } from 'react'
import Home from './Home';
import Landing from './Landing';
import config from './Config';

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
