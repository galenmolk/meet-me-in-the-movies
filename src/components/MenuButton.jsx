import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

function MenuButton({button}) {
    const buttonRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            buttonRef.current.style.opacity = "1";
        }, button.delay);
    }, []);

    return (
        <Link ref={buttonRef} className="menu-button fade-in" to={button.url} target={"_blank"} >
            <img src={button.imgSrc} alt={button.alt}></img>
        </Link>
    );
}

export default MenuButton;