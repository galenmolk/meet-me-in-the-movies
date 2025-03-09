import buttons from "../data/Buttons";
import MenuButton from "../components/MenuButton";
import SocialCard from "../components/SocialCard";
import AudioPlayer from "../components/AudioPlayer";
import TvBorder from "../components/TvBorder";
import { useEffect, useRef, useState } from "react";

function Home() {
    const [hasEntered, setHasEntered] = useState(false);

    const audioRef = useRef(null);
    const bgImg = useRef(null);
    const landingImg = useRef(null);
    const enterTextRef = useRef(null);
    const enteredContentRef = useRef(null);

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
        document.documentElement.style.overflowY = "hidden";

        setTimeout(() => {
            landingImg.current.style.opacity = "1";
            enterTextRef.current.style.opacity = "1";
        }, 750);

        window.addEventListener('resize', attemptResize);
        window.addEventListener('click', startEntering)

        return () => {
            window.removeEventListener('resize', attemptResize);
            window.removeEventListener('click', startEntering);
            window.removeEventListener('blur', pauseMusic);
            window.removeEventListener('focus', playMusic);
        };
    }, []);

    const startEntering = () => {
        landingImg.current.style.opacity = "0";
        enterTextRef.current.style.opacity = "0";
        window.removeEventListener('click', startEntering)
        setTimeout(() => {
            bgImg.current.classList.add('loaded');
            playMusic();
            window.addEventListener('blur', pauseMusic);
            window.addEventListener('focus', playMusic);    
            setHasEntered(true);
        }, 1000);
    };

    const playMusic = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const pauseMusic = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
      };

    const enteredJsx = () => {
        return <div className="entered-content" ref={enteredContentRef}>
                <div className="container-fluid hero-container fade-in" >
                    <img className="name-img" src='./name-white.png' alt='Olivia Wendel'></img>
                </div>

                <div className="menu">
                    {buttons.map((b, index) => {
                        return <MenuButton button={b} key={index} />
                    })}         
                </div>
                <SocialCard />
            </div>
    };

    const empty = () => {
        return <div className="empty"></div>
    };

    return (
        <> 
            <AudioPlayer ref={audioRef}/>

            <TvBorder />
            
            <div className="page-content">
                <img className="bg-img" ref={bgImg} src={"./OW-BW.webp"}></img>
                <img className="landing-img" ref={landingImg} src={"./OW-Collage.webp"}></img>
                <p className="enter-text" ref={enterTextRef}>Enter</p>
                {hasEntered ? enteredJsx() : empty()}
            </div>
        </>
    )
}

export default Home;