import { useState, useEffect, useRef } from 'react'
import Home from './Home';
import Landing from './Landing';
import config from './Config';

function App() {
  const [hasEntered, setHasEntered] = useState(config.autoEnter); 
  const bgMusicRef = useRef(null);

  const enterSite = () => {
    window.removeEventListener('click', enterSite);
    setHasEntered(true);
    playMusic();
  };  

  const playMusic = () => {
    const audio = bgMusicRef.current;
    if (audio) {
      audio.play();
    }
  };

  useEffect(() => {
    if (config.autoEnter) {
      playMusic();
    } else {
      window.addEventListener('click', enterSite);
    }
  }, []);

  return (
    <>
      <audio ref={bgMusicRef} preload="auto" loop>
        <source src="./cm5lxjx43000008l76lqkck98.mp3" type="audio/mpeg"/>
        Your browser does not support the audio element.
      </audio>
      {hasEntered ? <Home /> : <Landing />}
    </>
  )
}

export default App
