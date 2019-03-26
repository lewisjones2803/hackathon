import React from 'react';
import './DataDisplay.scss';
import { subscribeAccelerometer, subscribeButtonPress } from './socket';
import TireVis from '../TireVis/TireVis';

class DataDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accelerometerData: {
        sensorId: '',
        x: 0,
        y: 0,
        z: 0
      },
      accelerometerDataMax: {
        x: 0,
        y: 0,
        z: 0
      },
      accelerometerDataMin: {
        x: 0,
        y: 0,
        z: 0
      },
      buttonPressData: ''
    }

    subscribeAccelerometer((data) => {
      // {"sensorId":"e96122f9c20c45528b7663f5dbafff95","x":"0.05","y":"-0.03","z":"1.00"}
      let accelerometerData = data;

      accelerometerData.x *= 1;
      accelerometerData.y *= 1;
      accelerometerData.z *= 1;

      let accelerometerDataMax = this.state.accelerometerDataMax;
      let accelerometerDataMin = this.state.accelerometerDataMin;

      if (accelerometerData.x > accelerometerDataMax.x){
        accelerometerDataMax.x = accelerometerData.x;
      }
      if (accelerometerData.y > accelerometerDataMax.y){
        accelerometerDataMax.y = accelerometerData.y;
      }
      if (accelerometerData.z > accelerometerDataMax.z){
        accelerometerDataMax.z = accelerometerData.z;
      }

      if (accelerometerData.x < accelerometerDataMin.x){
        accelerometerDataMin.x = accelerometerData.x;
      }
      if (accelerometerData.y < accelerometerDataMin.y){
        accelerometerDataMin.y = accelerometerData.y;
      }
      if (accelerometerData.z < accelerometerDataMin.z){
        accelerometerDataMin.z = accelerometerData.z;
      }

      this.setState({
        accelerometerData: data,
        accelerometerDataMax: accelerometerDataMax,
        accelerometerDataMin: accelerometerDataMin
      });

    });

    subscribeButtonPress((data) => {
      // e96122f9c20c45528b7663f5dbafff95
      let uuid = 'e96122f9c20c45528b7663f5dbafff95';
      uuid = "Neil's Nibbles"; if (data === uuid);

      this.setState({
        buttonPressData: uuid
      });
    });
  }

  render() {
    return(
      <div>
        <h1>accelerometerData:</h1>
        <p>
          x: {this.state.accelerometerData.x} <br />
          y: {this.state.accelerometerData.y} <br />
          z: {this.state.accelerometerData.z}
        </p>
        <p>
          MAX <br />
          x: {this.state.accelerometerDataMax.x} <br />
          y: {this.state.accelerometerDataMax.y} <br />
          z: {this.state.accelerometerDataMax.z}
        </p>
        <p>
          MIN <br />
          x: {this.state.accelerometerDataMin.x} <br />
          y: {this.state.accelerometerDataMin.y} <br />
          z: {this.state.accelerometerDataMin.z}
        </p>
        <p>
          buttonPressData: {this.state.buttonPressData}
        </p>
        <TireVis x={this.state.accelerometerData.x} y={this.state.accelerometerData.y} />
      </div>
    );
  }
}

export default DataDisplay;
