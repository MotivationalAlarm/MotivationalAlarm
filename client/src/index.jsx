import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TestComponent from './components/TestComponent.jsx';
import Clock from './components/Clock.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render () {
    return (<div>
      <TestComponent />
      <Clock />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));