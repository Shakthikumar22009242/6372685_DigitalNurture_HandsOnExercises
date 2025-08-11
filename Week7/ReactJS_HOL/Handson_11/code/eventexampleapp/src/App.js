import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: '',
      clickedMessage: '',
      rupees: '',
      euros: '',
    };

    // Bind all methods to this
    this.incrementCounter = this.incrementCounter.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleIncreaseClick = this.handleIncreaseClick.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.handleRupeesChange = this.handleRupeesChange.bind(this);
    this.handleConvert = this.handleConvert.bind(this);
  }

  // Increment counter by 1
  incrementCounter() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  // Display Hello message
  sayHello() {
    this.setState({ message: 'Hello, welcome to React event handling!' });
  }

  // This method calls two methods on Increase button click
  handleIncreaseClick() {
    this.incrementCounter();
    this.sayHello();
  }

  // Function to display alert with the given text
  sayWelcome(text) {
    alert(text);
  }

  // Synthetic event handler for "OnPress" button
  handleOnPress() {
    this.setState({ clickedMessage: 'I was clicked' });
  }

  // Update rupees state when input changes
  handleRupeesChange(event) {
    this.setState({ rupees: event.target.value });
  }

  // Convert rupees to euros on button click
  handleConvert() {
    const rate = 0.011; // Conversion rate: 1 INR = 0.011 Euro
    const euros = (parseFloat(this.state.rupees) * rate).toFixed(2);
    this.setState({ euros: isNaN(euros) ? '' : euros });
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>React Event Handling Examples</h1>

        {/* Counter display and buttons */}
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleIncreaseClick}>Increase</button>{' '}
        <button onClick={() => this.setState(prev => ({ counter: prev.counter - 1 }))}>
          Decrement
        </button>
        <p>{this.state.message}</p>

        {/* Say Welcome button */}
        <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>

        {/* Synthetic event button */}
        <div style={{ marginTop: '20px' }}>
          <button onClick={this.handleOnPress}>Click Me (Synthetic Event)</button>
          <p>{this.state.clickedMessage}</p>
        </div>

        {/* Currency Converter */}
        <div style={{ marginTop: '40px' }}>
          <h2>Currency Convertor (INR to Euro)</h2>
          <input
            type="number"
            placeholder="Enter amount in Rupees"
            value={this.state.rupees}
            onChange={this.handleRupeesChange}
          />
          <button onClick={this.handleConvert} style={{ marginLeft: '10px' }}>
            Convert
          </button>
          <p>Equivalent Euros: {this.state.euros}</p>
        </div>
      </div>
    );
  }
}

export default App;
