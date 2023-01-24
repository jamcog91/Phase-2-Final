import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import About from "./About";
import MoonArray from "./MoonArray";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import AddPlanetForm from "./AddPlanetForm";

export default function App() {

  //global states
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/AddPlanetForm",
        element: <AddPlanetForm />,
      },
      {
        path: "/MoonArray",
        element: <MoonArray />,
      },
      {
        path: "*",
        element: <div>404 NOT FOUND</div>
      },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
