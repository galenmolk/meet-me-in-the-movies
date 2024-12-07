import { Link } from "react-router-dom";

function MenuButton({button}) {
    return (
        <div className='menu-link col-12 col-xl-4 mb-4'>
            <div className="menu-button">
            <Link to={button.url} target={"_blank"} style={{ textDecoration: 'none'}}>
                <div className="menu-button-bg">
                    {button.imgSrc !== undefined ? 
                    (<img src={button.imgSrc} alt={button.alt}></img>) 
                    :
                    (<></>)
                }
                </div>
                <p>{button.title}</p>
            </Link>
            </div>
        </div>
    );
}

export default MenuButton;