import { useEffect, useRef } from "react";
import TvBorder from "./TvBorder";

function Landing() {
    const dvdLogoRef = useRef(null);
    const bgMusicRef = useRef(null);
    const BORDER_WIDTH = 60;
    const DEFAULT_SPEEDX = 0.35;
    const DEFAULT_SPEEDY = 0.35;

    let speedX = DEFAULT_SPEEDX;
    let speedY = DEFAULT_SPEEDY;
    let posX = window.innerWidth * 0.5;
    let posY = window.innerHeight * 0.5;

    const handleResize = () => {
        const dvdLogo = dvdLogoRef.current;

        if (dvdLogo) {
            posX = window.innerWidth * 0.5;
            posY = window.innerHeight * 0.5;
            speedX = DEFAULT_SPEEDX;
            speedY = DEFAULT_SPEEDY;
        }
    };

    const checkStraightBorder = () => {
        const dvdLogo = dvdLogoRef.current;

        const width = window.innerWidth;
        const height = window.innerHeight;

        if (posX <= BORDER_WIDTH) {
            speedX = -speedX;
        } else if (posX + dvdLogo.offsetWidth >= width - BORDER_WIDTH) {
            speedX = -speedX;
        }

        if (posY <= BORDER_WIDTH) {
            speedY = -speedY;
        } else if (posY + dvdLogo.offsetHeight >= height - BORDER_WIDTH) {
            speedY = -speedY;
        }
    };

    const updatePosition = () => {
        const dvdLogo = dvdLogoRef.current;
        if (!dvdLogo) return;

        posX += speedX;
        posY += speedY;

        checkStraightBorder();

        dvdLogo.style.left = `${posX}px`;
        dvdLogo.style.top = `${posY}px`;
    };

    useEffect(() => {
        function animate() {
            updatePosition();
            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <TvBorder>
                <div id="dvd-logo" ref={dvdLogoRef}>Oliva Wendel</div>
            </TvBorder>
        </>
    )
}

export default Landing;
