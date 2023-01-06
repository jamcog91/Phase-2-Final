import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

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
      // {
      //   path: "/PlanetProfile",
      //   element: <PlanetProfile clickedBodyObject={clickedBodyObject}/>,
      // },
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


