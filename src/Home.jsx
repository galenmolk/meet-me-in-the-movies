import TvBorder from "./TvBorder";
import buttons from "./Buttons";
import MenuButton from "./MenuButton";
import SocialCard from "./SocialCard";
import { useEffect } from "react";

function Home() {
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
        window.addEventListener('resize', attemptResize);

        return () => {
            window.removeEventListener('resize', attemptResize);
        };
    }, []);

    return (
        <> 
            <TvBorder/>
            <div className="page-content">
                <img className="bg-img" src="../OliviaWendel.png"></img>
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