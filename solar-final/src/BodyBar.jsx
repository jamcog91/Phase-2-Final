import React, { useState, useEffect } from "react";

export default function BodyBar({planetType, clickedBody, setClickedBody}){

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
    
    
    const [planetsMoonArray, setPlanetsMoonArray] = useState([])
    const [clickedBodyName, setClickedBodyName] = useState('')

    useEffect(() => {
        createPlanetArray()
    }, [clickedBodyName])

    function createPlanetArray(){
        const fillteredMoonArray = moonsArray.filter((moon) => {
            return clickedBodyName === moon.parent
        })
        setPlanetsMoonArray(fillteredMoonArray)
    }

    

    useEffect(()=>{
        setPlanetsMoonArray([])
    },[planetType])

    function populateBodyList(array){
        return array.map((body) => {
            return(
                <BodyCard key={body.id} body={body} setClickedBodyName={setClickedBodyName}/>
            )
        }) 
    }

    return(
        <>
            <div className="body-list">
                {planetType === "dwarfPlanets"  
                    ?   populateBodyList(dwarfPlanetsArray)                       
                    :   populateBodyList(planetsArray)       
                }
            </div>
            <div className="body-list">
                {planetsMoonArray.map((body) => {
                    return(
                        <BodyCard key={body.id} body={body}/>
                    )
                })}
            </div>
        </>
    )
  }



  function BodyCard ({body, setClickedBodyName}){

    const [mouseOverImage, setMouseOverImage] = useState(1)
    const [mouseOverText, setMouseOverText] = useState(0)   

    return(
        <div 
            className="body-thumbnails"
            onClick={()=>(
                setClickedBodyName(body.name)
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
            <div 
                className={body.type === "satellite" ? "moon-name" : "body-name"} 
                style={{opacity: mouseOverText}}> 
                {body.name} 
            </div>
            <img 
                className={body.type === "satellite" ? "moon-image" : "body-image"} 
                src={body.image} 
                alt={body.name} 
                style={{opacity: mouseOverImage}}
                
            />
        </div>
    )
  }