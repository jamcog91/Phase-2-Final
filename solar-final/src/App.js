import React, { useState, useEffect } from 'react';
import PlanetList from './PlanetList';
import VehicleDropdown from './VehicleDropdown';
import NewVehicleForm from './NewVehicleForm';


const App = () => {
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedPlanets, setSelectedPlanets] = useState([null, null]);
  const [distanceUnit, setDistanceUnit] = useState('miles');

  useEffect(() => {
    // Fetch planets from the server and update the state
    fetch("http://localhost:3001/planets")
      .then((resp) => resp.json())
      .then((planetArray) => {
        console.log(planetArray)
        setPlanets(planetArray);
        setSelectedPlanets([planetArray[0], planetArray[3]]);
      });
    },[]);
    // Fetch vehicles from the server and update the state
    // fetch("http://localhost:3001/planets")
  return(
    <div>
     <PlanetList planets={planets} onPlanetSelect={selectedPlanets}/>
     <VehicleDropdown vehicles={vehicles} onChange={setVehicles}/>
     <NewVehicleForm/>
    </div>

  )}

  export default App