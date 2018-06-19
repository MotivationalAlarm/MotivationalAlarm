import React from 'react';

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
      <div>
      Hello it's <h1>{newDate[1]}</h1>
      <h2>{newDate[0]}</h2>
      </div>
    )
  }
}

export default Clock;
