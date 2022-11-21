import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName, width, height } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{`${planetName}`}</p>
        <img
          src={ `${planetImage}` }
          alt={ `Planeta ${planetName}` }
          style={ {
            width: `${width}px`,
            height: `${height}px`,
            objectFit: 'cover',
          } }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default PlanetCard;
