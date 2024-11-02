import { useEffect, useRef } from "react";
import TvBorder from "./TvBorder";

function Landing() {
    const dvdLogoRef = useRef(null);
    const DEFAULT_SPEEDX = 0.35;
    const DEFAULT_SPEEDY = 0.35;

    const BIG_WIDTH_X = 70;
    const BIG_WIDTH_Y = 74;

    const SMALL_WIDTH_X = 36;
    const SMALL_WIDTH_Y = 23;

    const SCREEN_WIDTH_THRESHOLD = 768;

    let speedX = DEFAULT_SPEEDX * 2;
    let speedY = DEFAULT_SPEEDY * 2;
    let posX = 0;
    let posY = 0;

    const setDefaultPosition = () => {
        const dvdLogo = dvdLogoRef.current;
        posX = (window.innerWidth - dvdLogo.offsetWidth) * 0.5;
        posY = (window.innerHeight - dvdLogo.offsetHeight) * 0.5;
    };

    const getBorderWidthX = (windowWidth) => {
        return windowWidth > SCREEN_WIDTH_THRESHOLD ? BIG_WIDTH_X : SMALL_WIDTH_X;
    }

    const getBorderWidthY = (windowWidth) => {
        return windowWidth > SCREEN_WIDTH_THRESHOLD ? BIG_WIDTH_Y : SMALL_WIDTH_Y;
    }

    const handleResize = () => {
        setDefaultPosition();
        speedX = DEFAULT_SPEEDX;
        speedY = DEFAULT_SPEEDY;
    };

    const checkStraightBorder = () => {
        const dvdLogo = dvdLogoRef.current;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const widthX = getBorderWidthX(windowWidth);
        const widthY = getBorderWidthY(windowWidth);

        if (posX <= widthX) {
            speedX = -speedX;
        } else if (posX + dvdLogo.offsetWidth >= windowWidth - widthX) {
            speedX = -speedX;
        }

        if (posY <= widthY) {
            speedY = -speedY;
        } else if (posY + dvdLogo.offsetHeight >= windowHeight - widthY) {
            speedY = -speedY;
        }
    };

    const updatePosition = () => {
        posX += speedX;
        posY += speedY;

        checkStraightBorder();

        const dvdLogo = dvdLogoRef.current;
        dvdLogo.style.left = `${posX}px`;
        dvdLogo.style.top = `${posY}px`;
    };

    useEffect(() => {
        setDefaultPosition();

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
