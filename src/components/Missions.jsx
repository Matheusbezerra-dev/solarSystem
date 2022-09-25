import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missions.map((a) => (
          <MissionCard
            key={ a.name }
            name={ a.name }
            year={ a.year }
            country={ a.country }
            destination={ a.destination }
          />))}
      </div>
    );
  }
}

export default Missions;
