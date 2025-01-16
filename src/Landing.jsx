import { useEffect, useRef } from "react";
import TvBorder from "./TvBorder";
import config from './Config';

function Landing() {
    const randomSign = () => {
        return Math.random() > 0.5 ? 1 : -1;
    }

    const dvdLogoRef = useRef(null);
    const DEFAULT_SPEEDX = config.logoSpeed;
    const DEFAULT_SPEEDY = config.logoSpeed;

    const BIG_WIDTH_X = 50;
    const BIG_WIDTH_Y = 50;

    const SMALL_WIDTH_X = 25;
    const SMALL_WIDTH_Y = 25;

    const SCREEN_WIDTH_THRESHOLD = 768;

    const colors = ['#596B64', '#EAC3B7', '#EEE5D1'];

    let speedX = DEFAULT_SPEEDX * randomSign();
    let speedY = DEFAULT_SPEEDY * randomSign();
    let posX = 0;
    let posY = 0;

    const setColor = () => {
        //const dvdLogo = dvdLogoRef.current;
        //dvdLogo.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }

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
        speedX = DEFAULT_SPEEDX * randomSign();
        speedY = DEFAULT_SPEEDY * randomSign();
    };

    const checkStraightBorder = (dvdLogo) => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const widthX = getBorderWidthX(windowWidth);
        const widthY = getBorderWidthY(windowWidth);

        if (posX <= widthX) {
            speedX = -speedX;
            setColor();
        } else if (posX + dvdLogo.offsetWidth >= windowWidth - widthX) {
            speedX = -speedX;
            setColor();
        }

        if (posY <= widthY) {
            speedY = -speedY;
            setColor();
        } else if (posY + dvdLogo.offsetHeight >= windowHeight - widthY) {
            speedY = -speedY;
            setColor();
        }
    };

    const updatePosition = () => {
        const dvdLogo = dvdLogoRef.current;

        if (!dvdLogo) {
            return;
        }

        posX += speedX;
        posY += speedY;

        checkStraightBorder(dvdLogo);

        dvdLogo.style.left = `${posX}px`;
        dvdLogo.style.top = `${posY}px`;
    };

    useEffect(() => {
        setColor();
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
            <TvBorder />
            <div id="dvd-logo" ref={dvdLogoRef}>
                <img src='./name-black.png'></img>
            </div>
        </>
    )
}

export default Landing;
