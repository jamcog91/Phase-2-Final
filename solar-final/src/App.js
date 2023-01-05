<<<<<<< HEAD
import React, { useState } from "react";
import { ReactDOM } from "react-router-dom";
import SettingsBar from "./SettingsBar";
import BodyBar from "./BodyBar";
import BodyInfoCard from "./BodyInfoCard"
import PlanetProfile from "./PlanetProfile";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
=======
import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import SettingsBar from "./SettingsBar";
import BodyBar from "./BodyBar";
import LeftBodyInfoCard from "./LeftBodyInfoCard"
import RightBodyInfoCard from "./RightBodyInfoCard";
>>>>>>> b825723ff2684fcd231d05539041624ae836d45f
=======
import HomePage from "./HomePage";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
>>>>>>> james

export default function App() {

  //global states
  const [planetType, setPlanetType] = useState('planets')
  const [clickedBody, setClickedBody] = useState()
<<<<<<< HEAD
  const router = createRouterBrowser([
    {
      path: "/",
      component: BodyBar
    },
    {
      path: "/BodyInfoCard",
      component: BodyInfoCard
    },
    {
      path: "/PlanetProfile",
      component: PlanetProfile
    },
    {
      path: "*",
      component: <div>404 NOT FOUND</div>
    },
  ]);
=======
  const [clickedBodyObject, setClickedbodyObject] = useState()
<<<<<<< HEAD

  const [leftObject, setLeftObject] = useState()
  const [rightObject, setRightObject] = useState()


  useEffect(()=>{
    tripLocation === "end" ? setRightObject(clickedBodyObject) : setLeftObject(clickedBodyObject)
  },[clickedBodyObject])

>>>>>>> b825723ff2684fcd231d05539041624ae836d45f

  return (
    <div>
      <header>
        <h3>Space Travel Simulator</h3>
<<<<<<< HEAD
        <RouterProvider router={router}/>
        <SettingsBar setPlanetType={setPlanetType}/>
        <BodyBar planetType={planetType} clickedBody={clickedBody} setClickedBody={setClickedBody}/>
      </header>
      <BodyInfoCard clickedBody={clickedBody}/>
      <PlanetProfile  />
=======
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
>>>>>>> b825723ff2684fcd231d05539041624ae836d45f
=======
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
      // {
      //   path: "/PlanetProfile",
      //   element: PlanetProfile,
      // },
      {
        path: "*",
        element: <div>404 NOT FOUND</div>
      },
  ])
  return (
    <div>
      <RouterProvider router={router} />
>>>>>>> james
    </div>
  );
}


