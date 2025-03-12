import { Link } from "react-router-dom";
import '../styles/teaser.css'

export default function Teaser() {
    return (
        <>
            <div className='teaser-container'>
                <Link to={'https://www.instagram.com/oliviawendelmusic'} target={"_blank"} style={{ textDecoration: 'none'}}>
                    <p className='teaser-text'>Coming Soon...</p>
                </Link>
            </div>
        </>
    );
}
