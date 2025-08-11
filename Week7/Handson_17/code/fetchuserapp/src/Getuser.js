// src/Getuser.js
import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      firstName: '',
      image: '',
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();

      const user = data.results[0];
      this.setState({
        title: user.name.title,
        firstName: user.name.first,
        image: user.picture.large,
        loading: false
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    if (this.state.loading) {
      return <h3>Loading user...</h3>;
    }

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>{this.state.title} {this.state.firstName}</h2>
        <img src={this.state.image} alt="User" style={{ borderRadius: '50%' }} />
      </div>
    );
  }
}

export default Getuser;
