import React, { Component } from "react";
import './StartPanel.scss';
const ms = require('pretty-ms');

class StartPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneReady: false,
            playerTwoReady: false,
            time: 0,
            start: 1,
            isStarted: false,
            currentLap: 0
        };
        this.readyPlayerTwo = this.readyPlayerTwo.bind(this);
        this.readyPlayerOne = this.readyPlayerOne.bind(this);
        this.startClock = this.startClock.bind(this);
        this.stopClock = this.stopClock.bind(this);
        this.resetClock = this.resetClock.bind(this);

    }

    startClock() {
        this.setState({
            isStarted: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }

    stopClock() {
        this.setState({isOn: false});
        clearInterval(this.timer)
    }

    resetClock() {
        this.setState({time: 0,
            isStarted: false});
        this.stopClock();
    }

    readyPlayerOne() {
        this.setState({ playerOneReady: true });
    }

    readyPlayerTwo() {
        this.setState({ playerTwoReady: true });
    }

    checkReadiness() {
      if (this.state.time >= 10000) {
          clearInterval(this.timer);
          return(
            <React.Fragment>
              <br />
              <span>Race Completed</span>
            </React.Fragment>
          )
      } else {
        return (
          <React.Fragment>
            <button className={this.state.playerOneReady ? "btn-success" : "btn-danger"} onClick={this.readyPlayerOne}>Ready player one</button>
            <button className={this.state.playerTwoReady ? "btn-success" : "btn-danger"} onClick={this.readyPlayerTwo}>Ready player two</button>
          </React.Fragment>
        )
      }
    }

    render() {
        return (
                <div className='btn-block'>
                    <h3>timer: {ms(this.state.time)}</h3>
                    <button className="btn-success" onClick={this.startClock}>Start Clock</button>
                    <button className="btn-danger" onClick={this.stopClock}>Stop Clock</button>
                    <button className="btn-dark" onClick={this.resetClock}>Reset Race</button>
                    <br />
                    {this.checkReadiness()}
                </div>

            );
    }
}

export default StartPanel;
