import { useState, useEffect, useRef } from 'react'
import Home from './Home';
import Landing from './Landing';

function App() {
  const [hasEntered, setHasEntered] = useState(false); 
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
    window.addEventListener('click', enterSite);
  }, []);

  return (
    <>
      <audio ref={bgMusicRef} preload="auto">
        <source src="./bg-music.mp3" type="audio/mpeg"/>
        Your browser does not support the audio element.
      </audio>
      {hasEntered ? <Home /> : <Landing />}
    </>
  )
}

export default App
