// src/CountPeople.js
import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    // Initialize state with entrycount and exitcount
    this.state = {
      entrycount: 0,
      exitcount: 0,
    };
  }

  UpdateEntry = () => {
    this.setState(prevState => ({
      entrycount: prevState.entrycount + 1,
    }));
  };

  UpdateExit = () => {
    this.setState(prevState => ({
      exitcount: prevState.exitcount + 1,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>People Counter</h1>
        <p>Number of people entered: {this.state.entrycount}</p>
        <p>Number of people exited: {this.state.exitcount}</p>

        <button onClick={this.UpdateEntry} style={{ marginRight: '10px' }}>
          Login
        </button>

        <button onClick={this.UpdateExit}>
          Exit
        </button>
      </div>
    );
  }
}

export default CountPeople;
