import { Link } from "react-router-dom";

function MenuButton({button}) {
    return (
        <div className="menu-button fade-in" style={{ animationDelay: `${button.delay}s`}}>
            <Link to={button.url} target={"_blank"} style={{ textDecoration: 'none'}}>
                {button.imgSrc !== undefined ? 
                    (<img src={button.imgSrc} alt={button.alt} style={{ height: `${button.height}%`}}></img>) :
                    (<></>)}
            </Link>
        </div>
    );
}

export default MenuButton;