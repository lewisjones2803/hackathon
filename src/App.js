import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import DataDisplay from './components/DataDisplay/DataDisplay';
import 'bootstrap/dist/css/bootstrap.css';

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
