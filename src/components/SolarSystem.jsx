import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import { ContainerPlanets } from '../styles/styles';

class SolarSystem extends React.Component {
  render() {
    // const { Planets } = this.props;
    return (
      <div>
        <Title headline="Planetas" />
        <ContainerPlanets data-testid="solar-system">
          {Planets.map((a) => (
            <PlanetCard
              key={ a.name }
              planetName={ a.name }
              planetImage={ a.image }
              width={ a.width }
              height={ a.height }
            />))}
        </ContainerPlanets>
      </div>
    );
  }
}

export default SolarSystem;
