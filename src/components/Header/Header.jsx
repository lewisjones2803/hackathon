import React, { Component } from "react";
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <div className="vertical-align" >
            <img src={require('./coat-of-arms-logo.svg')} className="mr-4 ml-4" alt="logo" />
            <h1 className="mr-3"><strong>DELTA</strong></h1>
            <h1 className="mr-3">|</h1>
            <h1>HACKATHON</h1>
          </div>
      </div>
    );
  }
}

export default Header;