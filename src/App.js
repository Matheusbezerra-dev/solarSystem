import React from 'react';
import { DivApp } from './styles/styles';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <DivApp>
        <Header />
        <SolarSystem />
        <Missions />
      </DivApp>
    );
  }
}

export default App;
