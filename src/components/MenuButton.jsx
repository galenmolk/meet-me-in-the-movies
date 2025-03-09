import { Link } from "react-router-dom";

function MenuButton({button}) {
    return (
        <Link className="menu-button fade-in" to={button.url} target={"_blank"} style={{ textDecoration: 'none', animationDelay: `${button.delay}s`}}>
            {button.imgSrc !== undefined ? 
                (<img src={button.imgSrc} alt={button.alt}></img>) :
                (<></>)}
        </Link>
    );
}

export default MenuButton;