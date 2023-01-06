import React, { useEffect, useState } from "react";
import SettingsBar from "./SettingsBar";
import BodyBar from "./BodyBar";
import LeftBodyInfoCard from "./LeftBodyInfoCard"
import RightBodyInfoCard from "./RightBodyInfoCard";

export default function App() {

  //states that keep track of the drop down values
  const [planetType, setPlanetType] = useState('planets')
  const [tripLocation, setTripLocation] = useState('start')
  //states used in setting what planet was clicked
  const [clickedBody, setClickedBody] = useState()
  const [clickedBodyObject, setClickedbodyObject] = useState()
  //used to push the clicked push the clicked object to the left or right displah
  const [leftObject, setLeftObject] = useState()
  const [rightObject, setRightObject] = useState()

  //checks which way we should push the object aka: which display to update
  useEffect(()=>{
    tripLocation === "end" ? setRightObject(clickedBodyObject) : setLeftObject(clickedBodyObject)
  },[clickedBodyObject])


  return (
    <div>
      <header>
        <h3>Space Travel Simulator</h3>
        <SettingsBar setPlanetType={setPlanetType} setTripLocation={setTripLocation} tripLocation={tripLocation}/>
        <BodyBar 
          planetType={planetType} 
          clickedBody={clickedBody} 
          setClickedBody={setClickedBody} 
          setClickedbodyObject={setClickedbodyObject}/>
      </header>
      <div className="main-display">
        <LeftBodyInfoCard clickedBodyObject={leftObject} classname={"left-main-display"}/>
        <RightBodyInfoCard clickedBodyObject={rightObject} classname={"right-main-display"}/>
      </div>
    </div>
  );
}


