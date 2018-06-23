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

  render() {
    return (
      <div className="ui page grid">
        <header className="ui grid stackable sixteen wide column">
          <div className="ten wide column header-container">
            <h1>Motivational Alarm</h1>
          </div>
          <div className="six wide column center aligned segment">
            <Button className="">Sign Up</Button>
            <Button className="">Log In</Button>
          </div>
        </header>
        <div className="ui grid stackable sixteen wide column">
          <div className="ten wide column">
              <div><Clock /></div>
              <div className="form">Form</div>
          </div>
          <div className="six wide column">
            <div className="alarm-list">Alarm List</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
