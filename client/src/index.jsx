import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Clock from './components/Clock.jsx';
import './styles/App.css';

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
            <button className="sign-up">Sign Up</button>
            <button className="log-in">Log In</button>
          </div>
        </header>
        <div className="clock"><Clock /></div>
        <div className="alarm-list">Alarm List</div>
        <div className="form">Form</div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));