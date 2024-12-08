import './social-card-style.css'
import { Link } from 'react-router-dom';

export default function SocialCard() {
    return (
        <div className='fade-in'>
            <Link to={'https://www.instagram.com/oliviawendelmusic'} target={"_blank"} style={{ textDecoration: 'none'}}>
                <div className='social-card'>
                    <img src='./ig-icon.svg' alt='instagram icon'></img>
                    <p>oliviawendelmusic</p>
                </div>
            </Link>
        </div>
    );
}
