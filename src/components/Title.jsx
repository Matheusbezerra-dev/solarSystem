import React from 'react';
import PropTypes from 'prop-types';
import { H2Title } from '../styles/styles';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <H2Title>{headline}</H2Title>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
