import buttons from "./Buttons";
import MenuButton from "./MenuButton";
import SocialCard from "./SocialCard";
import { useEffect, useRef } from "react";

function Home() {
    const bgImg = useRef(null);
    const overlay = useRef(null);

    let lastViewportWidth = window.innerWidth;

    const handleResize = () => {
        const currentWidth = window.innerWidth;

        if (window.innerWidth > 860 && currentWidth !== lastViewportWidth) {
            document.documentElement.scrollTop = 0;
        }

        lastViewportWidth = currentWidth;
    };

    let resizeTimeout;
    const attemptResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 100);
    };

    useEffect(() => {
        setTimeout(() => {
            bgImg.current.classList.add('loaded');
        }, 650);
        window.addEventListener('resize', attemptResize);
        
        return () => {
            window.removeEventListener('resize', attemptResize);
        };
    }, []);

    return (
        <> 
            <div className="border-overlay" ref={overlay} ></div>
            <div className="border-bar top-bar"></div>
            <div className="border-bar bottom-bar"></div>
            
            <div className="page-content">
            <img className="bg-img" ref={bgImg} src="../OliviaWendel.webp"></img>

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
        </>
    )
}

export default Home;