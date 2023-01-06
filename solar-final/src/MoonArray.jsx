import { useNavigate } from "react-router-dom"


import {React, useEffect, useState} from "react";
import { Card } from "semantic-ui-react";

function MoonArray() {

    const [moonsArray, setMoonsArray] =useState([])
    const [mouseOverImage, setMouseOverImage] = useState(1)
    const [mouseOverText, setMouseOverText] = useState(0)
    const navigate = useNavigate()


  //used to set the start array with all the pokemon
  const fetchMoons = async () =>{
    const req  = await fetch("http://localhost:3001/moons")
    const res = await req.json()    
    setMoonsArray(res)
  }
  //what calls the fetch and then stops itself from looping
  useEffect(()=>{
    fetchMoons();
  },[])

  

  return (
    <Card.Group itemsPerRow={6}>
      {/* displays the array of  moons */}
      <button className="home" onClick={() => navigate("/")}>Home</button>
      {moonsArray.map((moon) => {
        return(
            <div 
            className="body-thumbnails"            
            // fades and unfades the body image and text when the mouse hovers over it
            onMouseOver={()=>(
                setMouseOverImage(.3),
                setMouseOverText(1)
            )}
            onMouseLeave={()=>(
                setMouseOverImage(1),
                setMouseOverText(0)
            )}
            >
            <div
                // depending on what type of body we are we give it a different class name
                className={"body-name"} 
                style={{opacity: mouseOverText}}> 
                {moon.name} 
            </div>
            <img 
                // // depending on what type of body we are we give it a different class name
                className={"body-image"} 
                src={moon.image} 
                alt={moon.name} 
                style={{opacity: mouseOverImage}}
            />
            </div>
        )
      })}
    </Card.Group>
  );
}

export default MoonArray;