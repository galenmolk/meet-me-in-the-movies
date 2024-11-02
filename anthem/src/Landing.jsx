import { useEffect, useRef } from "react";
import TvBorder from "./TvBorder";

function Landing() {
    const dvdLogoRef = useRef(null);
    const DEFAULT_SPEEDX = 0.35;
    const DEFAULT_SPEEDY = 0.35;

    const BIG_WIDTH_X = 50;
    const BIG_WIDTH_Y = 73;

    const SMALL_WIDTH_X = 26;
    const SMALL_WIDTH_Y = 18;

    const SCREEN_WIDTH_THRESHOLD = 768;

    let speedX = DEFAULT_SPEEDX * 2;
    let speedY = DEFAULT_SPEEDY * 2;
    let posX = 0;
    let posY = 0;

    const getBorderWidthX = () => {
        return window.innerWidth > SCREEN_WIDTH_THRESHOLD ? BIG_WIDTH_X : SMALL_WIDTH_X;
    }

    const getBorderWidthY = () => {
        return window.innerWidth > SCREEN_WIDTH_THRESHOLD ? BIG_WIDTH_Y : SMALL_WIDTH_Y;
    }

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

        const widthX = getBorderWidthX();
        const widthY = getBorderWidthY();

        if (posX <= widthX) {
            speedX = -speedX;
        } else if (posX + dvdLogo.offsetWidth >= width - widthX) {
            speedX = -speedX;
        }

        if (posY <= widthY) {
            speedY = -speedY;
        } else if (posY + dvdLogo.offsetHeight >= height - widthY) {
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
        posX = window.innerWidth * 0.5 - (dvdLogoRef.current.offsetWidth * 0.5);
        posY = window.innerHeight * 0.5 - (dvdLogoRef.current.offsetHeight * 0.5);

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
            <TvBorder/>
            <div id="dvd-logo" ref={dvdLogoRef}>Oliva Wendel</div>
        </>
    )
}

export default Landing;
