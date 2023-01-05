import React, { useState } from "react";
import SettingsBar from "./SettingsBar";
import BodyBar from "./BodyBar";
import LeftBodyInfoCard from "./LeftBodyInfoCard"
import RightBodyInfoCard from "./RightBodyInfoCard";

export default function App() {

  //global states
  const [planetType, setPlanetType] = useState('planets')
  const [clickedBody, setClickedBody] = useState()
  const [clickedBodyObject, setClickedbodyObject] = useState()


  return (
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
      <div className="main-display">
        <LeftBodyInfoCard clickedBodyObject={clickedBodyObject} classname={"left-main-display"}/>
        <RightBodyInfoCard clickedBodyObject={clickedBodyObject} classname={"right-main-display"}/>
      </div>
    </div>
  );
}


