import TvBorder from "./TvBorder";

function Home() {
    return (
        <> 
            <TvBorder>
                <div className="container-fluid">
                    <div className="row">
                        <div className="justify-content-center">
                            <h1 className="text-center">OLIVIA WENDEL</h1>
                        </div>                    
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
                            <h2 className="text-center text-md-left">Meet Me At The Movies</h2>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                            <h2 className="text-center text-md-right">Out - January 31st 2025</h2>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="menu-button"></div>
                        <div className="menu-button"></div>
                        <div className="menu-button"></div>
                    </div>
                </div>
            </TvBorder>
        </>
    )
}

export default Home;