import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import DataDisplay from './components/DataDisplay/DataDisplay';
import TireVis from './components/TireVis/TireVis';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DataDisplay />
      </div>
    );
  }
}

export default App;
