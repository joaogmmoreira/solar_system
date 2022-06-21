import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetList = planets.map((planet) => (
      <div key={ planet.name }>
        <PlanetCard planetName={ planet.name } planetImage={ planet.image } />
      </div>
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>{planetList}</div>

      </div>
    );
  }
}

export default SolarSystem;
