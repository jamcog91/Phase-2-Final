<<<<<<< HEAD
function PlanetProfile({planetType}) {
    return(
        <div></div>
=======
function PlanetProfile({clickedBodyObject}) {
    console.log(clickedBodyObject)
    return(
        <div className="PlanetProfile">
            <div className="Planet-container">
            <img src={clickedBodyObject.image} alt={clickedBodyObject.name} />
            </div>
        </div>
>>>>>>> james
    )
}
export default PlanetProfile