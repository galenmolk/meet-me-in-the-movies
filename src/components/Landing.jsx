import '../styles/landing.css'
import { useEffect, useRef } from 'react';
import config from '../data/Config';

const Landing = () => {
    const landingRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            landingRef.current.style.opacity = "1";
        }, config.landingFadeInDelayMs)
    }, []);

    return <div className="landing" ref={landingRef}>
        <img className="landing-img" src={"./OW-Collage.webp"}></img>
        <p className="landing-text">Enter</p>
    </div>
};

export default Landing;
