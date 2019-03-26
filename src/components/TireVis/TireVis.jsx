import React from 'react';
import './TireVis.scss';
import { Scatter } from 'react-chartjs-2';
import Chart from 'chartjs-plugin-annotation';

class TireVis extends React.Component {
  constructor(props) {
    super(props);
    this.updateCoords(0.0, 0.0);
  }

  updateCoords(xVal, yVal) {
    this.state = {
      chartData: {
        datasets: [{
          label: 'Accelerometer data',
          data: [{
            x: xVal,
            y: yVal
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

  render() {
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
      </div >

    )
  }
}


export default TireVis;