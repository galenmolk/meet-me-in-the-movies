import TvBorder from "./TvBorder";
import buttons from "./Buttons";
import MenuButton from "./MenuButton";

function Home() {
    return (
        <> 
            <TvBorder/>

            <div className="container-fluid hero-container" onClick={() => {console.log('h')}}>
                    <div className="row">
                        <div className="justify-content-center">
                            <h1 className="text-center">OLIVIA WENDEL</h1>
                        </div>                    
                    </div>
                    <div className="row">
                        <div className="col-12 justify-content-center">
                            <h2 className="text-center">Meet Me In The Movies</h2>
                        </div>
                        <div className="col-12 justify-content-center">
                            <h2 className="text-center">Out - January 31st 2025</h2>
                        </div>
                    </div>
                </div>

                <div className="container menu">
                    <div className="row">
                        {buttons.map((b, index) => {
                            return <MenuButton button={b} key={index}/>
                        })}
                    </div>
                </div>
        </>
    )
}

export default Home;