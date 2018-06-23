import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Clock from './Clock.jsx';
import '../styles/App.css';
import {Button} from 'semantic-ui-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render () {
    return (
      <div className="app">
        <header>
          <div className="title">
            <h1 className="title__text">Motivational Alarm</h1>
          </div>
          <div className="auth-buttons">
            <Button>Sign Up</Button>
            <Button>Log In</Button>
          </div>
        </header>
        <div className="clock"><Clock /></div>
        <div className="alarm-list">Alarm List</div>
        <div className="form">Form</div>
    </div>
    )
  }
}

export default App;
