import React from 'react';
import '../styles/Clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  render() {
    let newDate = this.state.time.split(', ');
    return (
      <div id="body">
        Hello it's 
        <br />
        <br />
        <span id="clock">{newDate[1]}</span>
        <br />
        <p>{newDate[0]}</p>
      </div>
    )
  }
}

export default Clock;
