import TvBorder from "./TvBorder";
import buttons from "./Buttons";
import MenuButton from "./MenuButton";
import SocialCard from "./SocialCard";

function Home() {
    return (
        <> 
            <TvBorder/>
            <div className="page-content">
                <img className="bg-img" src="../public/OliviaWendel.jpg"></img>
                <div className="container-fluid hero-container fade-in" >
                    <img className="name-img" src='./name-white.png' alt='Olivia Wendel'></img>
                    <div className="row">
                        <div className="col-12 justify-content-center align-items-center">
                            <p className="album-title text-center">Meet Me In The Movies</p>
                        </div>
                        <div className="col-12 justify-content-center">
                            <p className="release-date text-center">January 31</p>
                        </div>
                    </div>
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