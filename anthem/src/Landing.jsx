import { useEffect, useRef } from "react";

function Landing() {
    const dvdLogoRef = useRef(null);
    const bgMusicRef = useRef(null);

    let speedX = 1;
    let speedY = 1;
    let posX = window.innerWidth * 0.5;
    let posY = window.innerHeight * 0.5;

    const handleResize = () => {
        const dvdLogo = dvdLogoRef.current;

        posX = Math.min(posX, window.innerWidth - dvdLogo.offsetWidth);
        posY = Math.min(posY, window.innerHeight - dvdLogo.offsetHeight);
    };

    const playMusic = () => {
        const audio = bgMusicRef.current;
        audio.play();
        window.removeEventListener('click', playMusic);
    };

    useEffect(() => {
        const dvdLogo = dvdLogoRef.current;

        function updatePosition() {
            posX += speedX;
            posY += speedY;
    
            if (posX <= 0 || posX + dvdLogo.offsetWidth >= window.innerWidth) {
                speedX = -speedX;
            }
    
            if (posY <= 0 || posY + dvdLogo.offsetHeight >= window.innerHeight) {
                speedY = -speedY;
            }
    
            dvdLogo.style.left = `${posX}px`;
            dvdLogo.style.top = `${posY}px`;
        }

        function animate() {
            updatePosition();
            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener('click', playMusic);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="dvd-logo" ref={dvdLogoRef}>
                DVD
            <audio ref={bgMusicRef} preload="auto">
                <source src="/empire-state-of-mind.mp3" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}

export default Landing;
