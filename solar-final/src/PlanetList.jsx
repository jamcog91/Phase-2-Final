import React from 'react';
import PlanetCards from './PlanetCards';

const PlanetList = ({ planets, onPlanetSelect }) => {
  return (
    <div id="planet-list">
      {planets.map((planet) => (
        <PlanetCards key={planet.id} planet={planet} onSelect={onPlanetSelect} />
      ))}
    </div>
  );
};

export default PlanetList;
