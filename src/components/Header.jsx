import React, { Component } from 'react';
import logo from '../images/logo-sistema-solar.png';
import { HeaderContainer } from '../styles/styles';

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <img src={ logo } alt="Logo Star Wars" />
      </HeaderContainer>
    );
  }
}
