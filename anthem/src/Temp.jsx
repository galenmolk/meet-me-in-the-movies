import SocialCard from "./SocialCard";
import TvBorder from "./TvBorder";
import { Link } from "react-router-dom";

export default function Temp() {
    return (
        <>
        <TvBorder />

        <div className='teaser-container'>
            <Link to={'https://www.instagram.com/oliviawendelmusic'} target={"_blank"} style={{ textDecoration: 'none'}}>
                <p className='teaser-text'>Coming Soon...</p>
            </Link>
        </div>
        </>
    );
}
