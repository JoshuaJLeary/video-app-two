import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Scott T',
      date: 'Mar 29'
    }
  };
  render() {
    return (
      <div>
        <nav className="nav__bar">
          <img src="https://channelconnect.nl/iotdossier/media/sites/8/2018/10/Microsoft-logo.jpg" className="microsoft__avatar" alt="microsoft__logo"/>
          <span className="user__name"><b>{this.state.name}</b></span>
          <span className="video__date">{this.state.date}</span>
          <img src="https://info.flipgrid.com/images/flipgrid_logo.svg" className="flipgrid__logo" alt="logo" />
        </nav>
      </div>
    );
  }
}

export default App;
