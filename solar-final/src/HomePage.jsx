import SettingsBar from "./SettingsBar";
import BodyBar from "./BodyBar";
import BodyInfoCard from "./BodyInfoCard"

function HomePage({setPlanetType, 
                   planetType, 
                   clickedBody, 
                   setClickedBody, 
                   setClickedbodyObject, 
                   clickedBodyObject,}) {
    return(
        <div>
          <header>
            <h3>Space Travel Simulator</h3>
                <SettingsBar setPlanetType={setPlanetType}/>
                    <BodyBar 
                        planetType={planetType} 
                        clickedBody={clickedBody} 
                        setClickedBody={setClickedBody} 
                        setClickedbodyObject={setClickedbodyObject}/>
            </header>
          <BodyInfoCard clickedBodyObject={clickedBodyObject}/>
        </div>
    )
}
export default HomePage