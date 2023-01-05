


export default function BodyInfoCard({clickedBodyObject}) {

    

    if (clickedBodyObject === undefined){
        return (
            <div>Pick a planet</div>
        )
    } else{
        return(     
            <div className="planet-card">
                <div className="container">
                    <div className="card">
                        <div className="planet">
                            <div className="circle"></div>
                            <img className="main-planet-detail-image" alt="planetImage" src={clickedBodyObject.image}></img>
                        </div>
                        <div className="info">
                            <h1 className="main-planet-name">{clickedBodyObject.name}</h1>
                            <div className="facts">
                                <h2 className="distance-from-sun">{clickedBodyObject.distanceFromSun}</h2>
                                <h2 className="year-length">{clickedBodyObject.lengthOfYear}</h2>
                                <h2 className="day-length">{clickedBodyObject.lengthOfDay}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}
