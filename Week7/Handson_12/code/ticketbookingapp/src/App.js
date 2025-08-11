import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;

    let pageContent;

    if (isLoggedIn) {
      // User page shown when logged in
      pageContent = (
        <div>
          <h2>Welcome User!</h2>
          <p>You can book your tickets here.</p>
          <button onClick={this.handleLogout}>Logout</button>

          {/* Dummy flight booking form */}
          <div style={{ marginTop: '20px' }}>
            <h3>Book Flight Tickets</h3>
            <form>
              <label>
                From:
                <input type="text" name="from" />
              </label>
              <br />
              <label>
                To:
                <input type="text" name="to" />
              </label>
              <br />
              <label>
                Date:
                <input type="date" name="date" />
              </label>
              <br />
              <button type="submit" style={{ marginTop: '10px' }}>
                Book
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      // Guest page shown when logged out
      pageContent = (
        <div>
          <h2>Welcome Guest!</h2>
          <p>Browse our flight details but please login to book tickets.</p>
          <button onClick={this.handleLogin}>Login</button>

          {/* Dummy flight details */}
          <div style={{ marginTop: '20px' }}>
            <h3>Available Flights</h3>
            <ul>
              <li>Flight 101: New York to London</li>
              <li>Flight 202: Paris to Tokyo</li>
              <li>Flight 303: Sydney to San Francisco</li>
            </ul>
          </div>
        </div>
      );
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Ticket Booking App</h1>
        {pageContent}
      </div>
    );
  }
}

export default App;
