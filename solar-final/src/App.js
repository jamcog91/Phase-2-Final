import React from "react";
import BodyBar from "./BodyBar";
import PlanetCards from "./PlanetCards"

export default function App() {

  return (
    <div>
      <header>
        <h3>Space Travel Simulator</h3>
        <BodyBar/>
      </header>
      <PlanetCards />
    </div>
  );
}


