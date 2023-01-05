import React, { useEffect, useState } from "react";
import SettingsBar from "./SettingsBar";
import BodyBar from "./BodyBar";
import LeftBodyInfoCard from "./LeftBodyInfoCard"
import RightBodyInfoCard from "./RightBodyInfoCard";

export default function App() {

  //global states
  const [planetType, setPlanetType] = useState('planets')
  const [tripLocation, setTripLocation] = useState('start')
  
  const [clickedBody, setClickedBody] = useState()
  const [clickedBodyObject, setClickedbodyObject] = useState()
  const router = createBrowserRouter([
      {
        path: "/",
        element: <HomePage 
        setPlanetType={setPlanetType}
        planetType={planetType}
        clickedBody={clickedBody}
        setClickedBody={setClickedBody}
        setClickedbodyObject={setClickedbodyObject}
        clickedBodyObject={clickedBodyObject}/>
      },
      {
        path: "/bodyInfoCard",
        exact: true,
        component: BodyInfoCard,
      },
      // {
      //   path: "/PlanetProfile",
      //   element: PlanetProfile,
      // },
      {
        path: "*",
        element: <div>404 NOT FOUND</div>
      },
  ])

  const [leftObject, setLeftObject] = useState()
  const [rightObject, setRightObject] = useState()


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


