import React, { useState } from "react";
import SettingsBar from "./SettingsBar";
import BodyBar from "./BodyBar";
import BodyInfoCard from "./BodyInfoCard"

export default function App() {

  
  const [planetType, setPlanetType] = useState('planets')
  const [clickedBody, setClickedBody] = useState()
  const [clickedBodyObject, setClickedbodyObject] = useState()

  return (
    <div>
      <header>
        <h3>Space Travel Simulator</h3>
        <SettingsBar setPlanetType={setPlanetType}/>
        <BodyBar planetType={planetType} clickedBody={clickedBody} setClickedBody={setClickedBody} setClickedbodyObject={setClickedbodyObject}/>
      </header>
      <BodyInfoCard clickedBodyObject={clickedBodyObject}/>
    </div>
  );
}


