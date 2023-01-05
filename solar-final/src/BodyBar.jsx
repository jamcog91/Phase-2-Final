import React, { useState, useEffect } from "react";

export default function BodyBar({planetType}){

    const [planetsArray, setPlanetsArray] = useState([])
    const [dwarfPlanetsArray, setDwarfPlanetsArray] = useState([])
    const [moonsArray, setMoonsArray] = useState([])

    
    const fetchPlanets = async () => {
        const req = await fetch('http://localhost:3001/planets')
        const res = await req.json()
        setPlanetsArray(res)
    }
    useEffect(() => {
        fetchPlanets()
    }, [])
    
    const fetchDwarfPlanets = async () => {
        const req = await fetch('http://localhost:3001/dwarfPlanets')
        const res = await req.json()
        setDwarfPlanetsArray(res)
    }
    useEffect(() => {
        fetchDwarfPlanets()
    },[])
    
    const fetchMoons = async () => {
        const req = await fetch('http://localhost:3001/moons')
        const res = await req.json()
        setMoonsArray(res)
    }
    useEffect(() => {
        fetchMoons()
    },[])
    
    
    const [clickedBody, setClickedBody] = useState("")
    const [planetsMoonArray, setPlanetsMoonArray] = useState([])

    useEffect(() => {
        createPlanetArray()
    }, [clickedBody])

    function createPlanetArray(){
        const fillteredMoonArray = moonsArray.filter((moon) => {
            return clickedBody === moon.parent
        })
        setPlanetsMoonArray(fillteredMoonArray)
    }

    function populateBodyList(array){
        console.log(array)
        array.map((body) => {
            return(
                <BodyCard key={body.id} body={body} clickedBody={clickedBody} setClickedBody={setClickedBody}/>
            )
        }) 
    }

    return(
        <>
            <div className="body-list">
                {planetType === "dwarfPlanets"  
                    ?   populateBodyList(dwarfPlanetsArray)                        
                    :   planetsArray.map((body) => {
                            return(
                                <BodyCard key={body.id} body={body} clickedBody={clickedBody} setClickedBody={setClickedBody}/>
                            )
                        })         
                }
            </div>
            <div className="body-list">
                {planetsMoonArray.map((moon) => {
                    return(
                        <MoonCard key={moon.id} moon={moon}/>
                    )
                })}
            </div>
        </>
    )
  }



  function BodyCard ({body, setClickedBody}){

    const [mouseOverImage, setMouseOverImage] = useState(1)
    const [mouseOverText, setMouseOverText] = useState(0)   

    return(
        <div 
            className="body-thumbnails"
            onClick={()=>(
                setClickedBody(body.name)
            )}
            onMouseOver={()=>(
                setMouseOverImage(.3),
                setMouseOverText(1)
            )}
            onMouseLeave={()=>(
                setMouseOverImage(1),
                setMouseOverText(0)
            )}
            >
            <div className="body-name" style={{opacity: mouseOverText}}>

                {body.name}
            </div>
            <img 
                className="body-image" 
                src={body.image} 
                alt={body.name} 
                style={{opacity: mouseOverImage}}
                
            />
        </div>
    )
  }

  function MoonCard({moon}){

    const [mouseOverImage, setMouseOverImage] = useState(1)
    const [mouseOverText, setMouseOverText] = useState(0)

    return(
        <div 
            className="body-thumbnails"
            onMouseOver={()=>(
                setMouseOverImage(.3),
                setMouseOverText(1)
            )}
            onMouseLeave={()=>(
                setMouseOverImage(1),
                setMouseOverText(0)
            )}
            >
            <div className="moon-name" style={{opacity: mouseOverText}}> {moon.name} </div>
            <img className="moon-image" src={moon.image} alt={moon.name} style={{opacity: mouseOverImage}}/>
        </div>
    )
  }