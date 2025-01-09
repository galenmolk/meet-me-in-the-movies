import TvBorder from "./TvBorder";
import buttons from "./Buttons";
import MenuButton from "./MenuButton";
import SocialCard from "./SocialCard";

function Home() {
    return (
        <> 
            <TvBorder/>

            <div className="page-content">
                <div className="container-fluid hero-container fade-in" >
                    <img className="name-img" src='./name.png' alt='Olivia Wendel'></img>
                    {/*<img className="portrait-left" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="></img>
                    */}
                    <div className="row">
                        <div className="col-12 justify-content-center align-items-center">
                            <p className="album-title text-center">Meet Me In The Movies</p>
                        </div>
                        <div className="col-12 justify-content-center">
                            <p className="release-date text-center">Out  ~  January 31st 2025</p>
                        </div>
                    </div>
                </div>

                <div className="menu">
                        {buttons.map((b, index) => {
                            return <MenuButton button={b} key={index} />
                        })}         
                </div>

{/* 
                <img className="portrait-right" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="></img>*/}
                <SocialCard />
            </div>
        </>
    )
}

export default Home;