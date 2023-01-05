function PlanetProfile({clickedBodyObject}) {
    return(
        <div className="PlanetProfile">
            <div className="Planet-container">
            <img src={clickedBodyObject.image} alt={clickedBodyObject.name} />
            </div>
        </div>
    )
}
export default PlanetProfile