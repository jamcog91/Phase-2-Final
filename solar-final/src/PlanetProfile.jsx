function PlanetProfile({clickedBodyObject}) {
    console.log(clickedBodyObject)
    return(
        <div className="PlanetProfile">
            <div className="Planet-container">
            <img src={clickedBodyObject.image} alt={clickedBodyObject.name} />
            </div>
        </div>
    )
}
export default PlanetProfile