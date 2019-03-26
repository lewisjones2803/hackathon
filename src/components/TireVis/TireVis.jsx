import React from 'react';
import './TireVis.scss';
import { Scatter } from 'react-chartjs-2';
import Chart from 'chartjs-plugin-annotation';

class TireVis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updateInterval: 50,
      chartData: {
        datasets: [{
          label: 'Accelerometer data',
          data: [{
            x: 0.0,
            y: 0.0
          }]
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            ticks: {
              min: -0.75,
              max: 0.75,
              stepSize: 0.15
            }
          }] ,
          yAxes: [{
            ticks: {
              min: -0.75,
              max: 0.75,
              stepSize: 0.15
            }
          }]
        }
      }
    }
  }

  componentDidUpdate(){
    let x = this.props.x || 0.0;
    let y = this.props.y || 0.0;

    if (this.props.mode === 'REALTIME'){
      this.updateCoords(x, y);
    } else if (this.props.mode === 'HISTORY'){
      if (this.state.updateInterval <= 0){
        this.addCoords(x, y);
        this.state.updateInterval = 50;
      } else {
        this.state.updateInterval --;
      }
    }
  }

  updateCoords(xVal, yVal) {
    this.state.chartData = {
      datasets: [{
        label: 'Accelerometer data',
        data: [{
          x: xVal,
          y: yVal
        }]
      }]
    };
  }

  render() {
    if (this.state.chartData){
      return (
        <div className="container">
          <div className="row">
            <div className="col-8 offset-2">
              <div className="scatter canvas">
                <Scatter
                  className="canvas"
                  data={this.state.chartData}
                  options={this.state.options} />
              </div>
            </div>
          </div>
        </div>
      )
    }
    return <div></div>
  }
}


export default TireVis;
