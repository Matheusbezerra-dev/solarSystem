import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    // const { Planets } = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((a) => (
          <PlanetCard
            key={ a.name }
            planetName={ a.name }
            planetImage={ a.image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
