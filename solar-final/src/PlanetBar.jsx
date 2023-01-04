import React, { useState, useEffect } from "react";

export default function PlanetBar(){

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
      <div className="planet-list">
        PlanetBar
        <PlanetCard/>
      </div>
    )
  }


  function PlanetCard (){


    return(
        <div className="planet-card">
            planet goes here
        </div>
    )
  }