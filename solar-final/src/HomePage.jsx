
import SettingsBar from "./SettingsBar";
import BodyBar from "./BodyBar";
import LeftBodyInfoCard from "./LeftBodyInfoCard"
import RightBodyInfoCard from "./RightBodyInfoCard"
import { useState, useEffect } from "react";

function HomePage({setPlanetType, 
                   planetType, 
                   clickedBody, 
                   setClickedBody, 
                   setClickedbodyObject, 
                   clickedBodyObject,}) {

const [leftObject, setLeftObject] = useState()
const [rightObject, setRightObject] = useState()
const [tripLocation, setTripLocation] = useState('start')

  useEffect(()=>{
    tripLocation === "end" ? setRightObject(clickedBodyObject) : setLeftObject(clickedBodyObject)
  },[clickedBodyObject])

    return(
        <div>
          <header>
            <h3 className="title">Space Travel Simulator</h3>
                <SettingsBar setPlanetType={setPlanetType} setTripLocation={setTripLocation}/>
                    <BodyBar 
                        planetType={planetType} 
                        clickedBody={clickedBody} 
                        setClickedBody={setClickedBody} 
                        setClickedbodyObject={setClickedbodyObject}
                        clickedBodyObject={clickedBodyObject}
                    />
            </header>
          <div className="main-display">
        <LeftBodyInfoCard clickedBodyObject={leftObject} classname={"left-main-display"}/>
        <RightBodyInfoCard clickedBodyObject={rightObject} classname={"right-main-display"}/>
      </div>
     
     </div>
    )  
}
export default HomePage

