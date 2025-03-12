import '../styles/landing.css'
import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import config from '../data/Config';

const Landing = forwardRef((props, ref) => {
    const landingRef = useRef(null);

    useImperativeHandle(ref, () => ({
        hide() {
            landingRef.current.style.opacity = "0";
        }
    }));

    useEffect(() => {
        setTimeout(() => {
            landingRef.current.style.opacity = "1";
        }, config.landingFadeInDelayMs)
    }, []);

    return <div className="landing" ref={landingRef}>
        <img className="landing-img" src={"./OW-Collage.webp"}></img>
        <p className="landing-text">Enter</p>
    </div>
});

export default Landing;
