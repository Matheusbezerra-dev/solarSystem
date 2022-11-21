import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import logo from '../images/iconeTrybe.png';
import { ContainerMissions, DivContainerMissions, ImgTrybe } from '../styles/styles';

class Missions extends React.Component {
  render() {
    return (
      <DivContainerMissions data-testid="missions">
        <Title headline="Missões" />
        <ContainerMissions>
          { missions.map((a) => (
            <MissionCard
              key={ a.name }
              name={ a.name }
              year={ a.year }
              country={ a.country }
              destination={ a.destination }
            />))}
        </ContainerMissions>
        <ImgTrybe src={ logo } alt="Logo Trybe" />
      </DivContainerMissions>
    );
  }
}

export default Missions;
