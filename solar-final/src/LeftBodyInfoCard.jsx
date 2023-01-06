import { useEffect, useState } from "react"

//builds a card that displays the info of the ody that was clicked
export default function LeftBodyInfoCard({clickedBodyObject, className}) {

    //states to hold the text info of the body
    const [bodyDistanceFromSun, setBodyDistanceFromSun] = useState("")
    const [yearLenght, setYearLength]  = useState('')
    const [dayLength, setDayLength] =useState('')
    

    //sets the distance of the body
    function displayDistance(body){
        if(body === undefined){return}
        if (body.name==="Sun"){setBodyDistanceFromSun("You cannot get closer to the Sun")}
        else{
            const formatedDistance = body.distanceFromSun.toLocaleString()
            setBodyDistanceFromSun(formatedDistance + " km from the Sun")
        }
    }
    useEffect(() => {
        displayDistance(clickedBodyObject)
    },[clickedBodyObject])

    //sets the length of a year of the body
    function displayYearLength(body){
        if(body === undefined){return}
        if (body.name==="Sun"){setYearLength("It is complicated -- Look up Sun barycenter")}
        else{setYearLength(body.lengthOfYear + "to go around the sun")}
    }
    useEffect(() => {
        displayYearLength(clickedBodyObject)
    },[clickedBodyObject])

    //sets the length of a day of the body
    function displayDayLength(body){
        if(body === undefined){return}
        else{setDayLength("A day is " + body.lengthOfDay)}
    }
    useEffect(() => {
        displayDayLength(clickedBodyObject)
    },[clickedBodyObject])


    //we check to see if the object is undefined - it would be on startup - so we dont try to pull info from nothing 
    if (clickedBodyObject === undefined){
        return (
            <div>Pick a planet</div>
        )
    } else{
        return(     
            <div className="left-main-display">
                <div className="planet">
                    <h1 className="location-text">Start Location</h1>
                    <img className="main-planet-detail-image" alt="planetImage" src={clickedBodyObject.image}></img>
                </div>
                <div className="info">
                    <h1 className="main-planet-name">{clickedBodyObject.name}</h1>
                    <div className="facts">
                        <h2 className="distance-from-sun">{bodyDistanceFromSun}</h2>
                        <h2 className="year-length">{yearLenght}</h2>
                        <h2 className="day-length">{dayLength}</h2>
                    </div>
                </div>
            </div>            
        )
    }
}