import React from 'react';
import PropTypes from 'prop-types';
import { DivMission, DivMissionAside, DivMissionAside1 } from '../styles/styles';
import bandeira from '../images/bandeira.png';
import data from '../images/data.png';
import local from '../images/local.png';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <DivMission data-testid="mission-card">
        <DivMissionAside1>
          <div data-testid="mission-name">
            {name}
          </div>
        </DivMissionAside1>
        <hr />
        <DivMissionAside>
          <div data-testid="mission-year">
            <img src={ data } alt="data" />
            {year}
          </div>
          <div data-testid="mission-country">
            <img src={ local } alt="local" />
            {` ${country}`}
          </div>
          <div data-testid="mission-destination">
            <img src={ bandeira } alt="bandeira" />
            {` ${destination}`}
          </div>
        </DivMissionAside>
      </DivMission>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
