import React, { useState, useEffect } from "react";

export default function BodyBar(){

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

    

    return(
      <div className="body-list">
        {planetsArray.map((body) => {
            return(
                <BodyCard key={body.id} body={body}/>
            )
        })}
      </div>
    )
  }


  function BodyCard ({body}){

    const [mouseOverImage, setMouseOverImage] = useState(1)
    const [mouseOverText, setMouseOverText] = useState(0)

    return(
        <div className="body-card">
            <div 
                className="body-name"s
                style={{opacity: mouseOverText}}
            >
                {body.name}
            </div>
            <h1>Harry</h1>
            <img 
                className="body-image" 
                src={body.image} 
                alt={body.name} 
                style={{opacity: mouseOverImage}}
                onMouseOver={()=>(
                    setMouseOverImage(.3),
                    setMouseOverText(1)
                    )}
                onMouseLeave={()=>(
                    setMouseOverImage(1),
                    setMouseOverText(0)
                    )}
            />
        </div>
    )
  }