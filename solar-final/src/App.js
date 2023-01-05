import React, { useState } from "react";
import SettingsBar from "./SettingsBar";
import BodyBar from "./BodyBar";

export default function App() {

  const [planetType, setPlanetType] = useState('planets')

  return (
    <div>
      <header>
        <h3>Space Travel Simulator</h3>
        <SettingsBar setPlanetType={setPlanetType}/>
        <BodyBar planetType={planetType}/>
      </header>
    </div>
  );
}


