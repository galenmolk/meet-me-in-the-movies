import { useEffect, useRef, useState } from "react";
import SocialCard from "../components/SocialCard";
import AudioPlayer from "../components/AudioPlayer";
import TvBorder from "../components/TvBorder";
import Landing from "../components/Landing";
import Menu from '../components/Menu'
import config from '../data/Config'

function Home() {
    const [hasEntered, setHasEntered] = useState(false);

    const audioRef = useRef(null);
    const landingRef = useRef(null);
    const homeContentRef = useRef(null);

    useEffect(() => {
        document.documentElement.scrollTop = 0;

        window.addEventListener('click', startEntering)

        return () => {
            window.removeEventListener('click', startEntering);
        };
    }, []);

    const startEntering = () => {
        window.removeEventListener('click', startEntering)

        landingRef.current.hide();

        setTimeout(() => {
            setHasEntered(true);

            // Wait 100 MS until the JSX exists.
            setTimeout(() => {
                homeContentRef.current.style.opacity = "1";
                playMusic();
            }, 100)

        }, config.enterDelayMs);
    };

    const playMusic = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const toggleMusic = () => {
        if (audioRef.current) {
            audioRef.current.toggle();
        }
    };

    const homeContent = () => {
        return <div onClick={toggleMusic} className="home-content" ref={homeContentRef}>
                <img className="bg-img" src={"./OW-BW.webp"}></img>

                <AudioPlayer ref={audioRef}/>

                <div className="container-fluid hero-container" >
                    <img className="name-img" src='./name-white.png' alt='Olivia Wendel'></img>
                </div>

                <Menu />
                <SocialCard />

            </div>
    };

    return (
        <> 
            <TvBorder />
            
            <div className="page-content">
                {hasEntered ? 
                homeContent() : 
                <Landing ref={landingRef} />}
            </div>
        </>
    )
}

export default Home;