import { useEffect, useRef, useState } from "react";
import SocialCard from "../components/SocialCard";
import AudioPlayer from "../components/AudioPlayer";
import TvBorder from "../components/TvBorder";
import Landing from "../components/Landing";
import Menu from '../components/Menu'

function Home() {
    const [hasEntered, setHasEntered] = useState(false);

    const audioRef = useRef(null);
    const bgImg = useRef(null);
    const homeContentRef = useRef(null);

    let lastViewportWidth = window.innerWidth;

    const handleResize = () => {
        if (!hasEntered) {
            return;
        }

        const currentWidth = window.innerWidth;

        if (currentWidth !== lastViewportWidth) {
            if (window.innerWidth > 860) {
                document.documentElement.scrollTop = 0;
            } else {
                document.documentElement.style.overflowY = "scroll";
            }
        }

        lastViewportWidth = currentWidth;
    };

    let resizeTimeout;
    const attemptResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 100);
    };

    useEffect(() => {
        window.addEventListener('resize', attemptResize);
        window.addEventListener('click', startEntering)

        return () => {
            window.removeEventListener('resize', attemptResize);
            window.removeEventListener('click', startEntering);
        };
    }, []);

    const startEntering = () => {
        window.removeEventListener('click', startEntering)
        setTimeout(() => {
            playMusic();
            setHasEntered(true);
        }, 1000);
    };

    const playMusic = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const homeContent = () => {
        return <div className="home-content" ref={homeContentRef}>
                <AudioPlayer ref={audioRef}/>
                <img className="bg-img" ref={bgImg} src={"./OW-BW.webp"}></img>

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
                <Landing />}
            </div>
        </>
    )
}

export default Home;