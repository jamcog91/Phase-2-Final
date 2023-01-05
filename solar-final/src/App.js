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

export default function App() {

  const [planetType, setPlanetType] = useState('planets')
  const [clickedBody, setClickedBody] = useState()
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

  return (
    <div>
      <header>
        <h3>Space Travel Simulator</h3>
        <RouterProvider router={router}/>
        <SettingsBar setPlanetType={setPlanetType}/>
        <BodyBar planetType={planetType} clickedBody={clickedBody} setClickedBody={setClickedBody}/>
      </header>
      <BodyInfoCard clickedBody={clickedBody}/>
      <PlanetProfile  />
    </div>
  );
}


