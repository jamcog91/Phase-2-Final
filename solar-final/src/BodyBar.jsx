import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

//builds the bar at the top of the screen that holds all the planet images
export default function BodyBar({planetType, clickedBody, setClickedBody, setClickedbodyObject, clickedBodyObject}){
    //states to hold the different bodies arrays
    const [planetsArray, setPlanetsArray] = useState([])
    const [dwarfPlanetsArray, setDwarfPlanetsArray] = useState([])
    const [moonsArray, setMoonsArray] = useState([])
    

    //fetch all the infomation from the server and then update the states
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
    
    //state to keep track of an indivdual planet's array of moons
    const [planetsMoonArray, setPlanetsMoonArray] = useState([])
    //state to keep track of the name if the body that was clicked so we can refence it when we look for its' moons
    const [clickedBodyName, setClickedBodyName] = useState('')
    //useEffect is used to make sure that we do not get out of sync 
    useEffect(() => {
        createPlanetArray()
    }, [clickedBodyName])

    //searches the moon array for all the moons that belong to the planet that was clicked then updates the planetMoonsArray 
    //state with tha info
    function createPlanetArray(){
        const fillteredMoonArray = moonsArray.filter((moon) => {
            return clickedBodyName === moon.parent
        })
        setPlanetsMoonArray(fillteredMoonArray)
    }    
    //used to reset the planetMoonsArray to epmpty after we change the dropdown 
    useEffect(()=>{
        setPlanetsMoonArray([])
    },[planetType])

    //adds the bodies of an array to the planet bar 
    function populateBodyList(array){
        return array.map((body) => {
            return(
                <BodyCard 
                    key={body.id} body={body} 
                    setClickedBodyName={setClickedBodyName} 
                    clickedBody={clickedBody} 
                    setClickedBody={setClickedBody} 
                    setClickedbodyObject={setClickedbodyObject}
                    clickedBodyObject={clickedBodyObject}/>
            )
        }) 
    }

    return(
        <>
            <div className="body-list">
                {/* checks which array we should be displaying based on the dropdown */}
                {planetType === "dwarfPlanets"  
                    ?   populateBodyList(dwarfPlanetsArray)                       
                    :   populateBodyList(planetsArray)       
                }
            </div>
            <div className="body-list">
                {/* displays the clicked planet's moons if it has any */}
                {planetsMoonArray.map((body) => {
                    return(
                        <BodyCard 
                            key={body.id} 
                            body={body}  
                            clickedBody={clickedBody} 
                            setClickedBody={setClickedBody} 
                            setClickedbodyObject={setClickedbodyObject}
                            clickedBodyObject={clickedBodyObject}/>
                    )
                })}
            </div>
        </>
    )
}

//builds each indvidual planet thumbnail on the planet bar
function BodyCard ({body, setClickedBodyName, setClickedBody,setClickedbodyObject, clickedBody}){
    //states to hold the opacity if the thumbnails when the mouse goes over them
    const navigate = useNavigate()
    const [mouseOverImage, setMouseOverImage] = useState(1)
    const [mouseOverText, setMouseOverText] = useState(0)

    //useEffect is used to we stay in sync with which body we click and not one behind    
    useEffect(()=>{
        setClickedbodyObject(clickedBody)
    },[clickedBody])
    //used to update the clicked body name for help with looking for its' moons as well as the object that was clicked
    function bodyClicked (body){
        if (body.type !== "satellite") { setClickedBodyName(body.name) }
        setClickedBody(body)
    }

    return(
        <div 
            className="body-thumbnails"
            onClick={()=> {
                bodyClicked(body)
            }}
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
                className={body.type === "satellite" ? "moon-name" : "body-name"} 
                style={{opacity: mouseOverText}}> 
                {body.name} 
            </div>
            <img 
                // // depending on what type of body we are we give it a different class name
                className={body.type === "satellite" ? "moon-image" : "body-image"} 
                src={body.image} 
                alt={body.name} 
                style={{opacity: mouseOverImage}}
                 />
            <button onClick={() => navigate("/")}>Learn More!</button>
        </div>
    )
}