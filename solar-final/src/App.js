import React, { useState } from "react";
import SettingsBar from "./SettingsBar";
import BodyBar from "./BodyBar";
import BodyInfoCard from "./BodyInfoCard"
import HomePage from "./HomePage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

export default function App() {

  const [planetType, setPlanetType] = useState('planets')
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

  return (
    <div>
      <RouterProvider router={router}/>
   </div> 
  );
}


