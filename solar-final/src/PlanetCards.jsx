
function PlanetCards({planet}) {
    return(
    <div id='main-display'>
        <div id="first-main-planet" class="planet-cards"></div>
            <div class="container"></div>
                <div class="card"></div>
                    <div class="planet"></div>
                        <div class="circle"></div>
                    <img  class ="moon-image"  alt="" src = {planet.image} />
                <div id="first-main-planet-info" class="info"></div>
            <h1 class="moon-name">{planet.name}</h1>        
        <div class="facts"></div>
    <h2 class="distance-from-sun">{planet.distanceFromSun}</h2>
    <h2 class="year-length">{PlanetCards.lengthOfYeaR}</h2>
    <h2 class="day-length">length of a day</h2>
    </div>
    )
}
export default PlanetCards