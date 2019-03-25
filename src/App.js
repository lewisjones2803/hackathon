import React, { Component } from 'react';
import './App.css';
import { subscribeAccelerometer, subscribeButtonPress } from './socket';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accelerometerData: {
        sensorId: '',
        x: 0,
        y: 0,
        z: 0
      },
      buttonPressData: ''
    }

    subscribeAccelerometer((data) => {
      // {"sensorId":"e96122f9c20c45528b7663f5dbafff95","x":"0.05","y":"-0.03","z":"1.00"}
      this.setState({
        accelerometerData: data
      });
    });

    subscribeButtonPress((data) => {
      // e96122f9c20c45528b7663f5dbafff95
      this.setState({
        buttonPressData: data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <p>
          accelerometerData: <br />
          x: {this.state.accelerometerData.x} <br />
          y: {this.state.accelerometerData.y} <br />
          z: {this.state.accelerometerData.z}
        </p>
        <p>
          buttonPressData: {this.state.buttonPressData}
        </p>
      </div>
    );
  }
}

export default App;
