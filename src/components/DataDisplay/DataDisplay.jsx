import React from 'react';
import './DataDisplay.scss';
import { subscribeAccelerometer, subscribeButtonPress, subscribeMagnetometer } from './socket';

class DataDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.players = {
      'PLAYER1': 'e96122f9c20c45528b7663f5dbafff95',
      'PLAYER2': 'a2267b096edb480f9a539b13aca7da83',
    }

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
      buttonPressData: '',
      magnetometerData: {
        x: 0,
        y: 0,
        z: 0
      },
      magnetometerDataMax: {
        x: 0,
        y: 0,
        z: 0
      },
      magnetometerDataMin: {
        x: 0,
        y: 0,
        z: 0
      }
    }

    subscribeAccelerometer((data) => {
      if (data.sensorId === this.players.PLAYER1){
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
      }

    });

    subscribeButtonPress((data) => {
      // e96122f9c20c45528b7663f5dbafff95
      let player1 = 'e96122f9c20c45528b7663f5dbafff95';
      let player2 = 'a2267b096edb480f9a539b13aca7da83';
      if (data === player1){
        data = "Player 1";
      } else if (data === player1){
        data = "Player 2";
      }

      this.setState({
        buttonPressData: data
      });
    });

    subscribeMagnetometer((data) => {
      if (data.sensorId === this.players.PLAYER1){
        // {}
        let magnetometerData = data;

        magnetometerData.x *= 1;
        magnetometerData.y *= 1;
        magnetometerData.z *= 1;

        let magnetometerDataMax = this.state.magnetometerDataMax;
        let magnetometerDataMin = this.state.magnetometerDataMin;

        if (magnetometerData.x > magnetometerDataMax.x){
          magnetometerDataMax.x = magnetometerData.x;
        }
        if (magnetometerData.y > magnetometerDataMax.y){
          magnetometerDataMax.y = magnetometerData.y;
        }
        if (magnetometerData.z > magnetometerDataMax.z){
          magnetometerDataMax.z = magnetometerData.z;
        }

        if (magnetometerData.x < magnetometerDataMin.x){
          magnetometerDataMin.x = magnetometerData.x;
        }
        if (magnetometerData.y < magnetometerDataMin.y){
          magnetometerDataMin.y = magnetometerData.y;
        }
        if (magnetometerData.z < magnetometerDataMin.z){
          magnetometerDataMin.z = magnetometerData.z;
        }

        this.setState({
          magnetometerData: data,
          magnetometerDataMax: magnetometerDataMax,
          magnetometerDataMin: magnetometerDataMin
        });
      }

    });
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-sm-6">
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
          </div>
          <div className="col-sm-6">
            <h1>magnetometerData:</h1>
            <p>
              x: {this.state.magnetometerData.x} <br />
              y: {this.state.magnetometerData.y} <br />
              z: {this.state.magnetometerData.z}
            </p>
            <p>
              MAX <br />
              x: {this.state.magnetometerDataMax.x} <br />
              y: {this.state.magnetometerDataMax.y} <br />
              z: {this.state.magnetometerDataMax.z}
            </p>
            <p>
              MIN <br />
              x: {this.state.magnetometerDataMin.x} <br />
              y: {this.state.magnetometerDataMin.y} <br />
              z: {this.state.magnetometerDataMin.z}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h1>Button Press</h1>
            <p>
              buttonPressData: {this.state.buttonPressData}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DataDisplay;
