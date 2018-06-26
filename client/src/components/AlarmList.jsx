import React from 'react';
import $ from 'jquery';
import '../styles/AlarmList.css';

class AlarmList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alarms: ['Alarm1', 'Alarm2', 'Alarm3']
    }
  }

  componentDidMount() {
  }

  render() {
    const alarmItems = this.state.alarms.map((alarm, index) =>
      <li key={index}>{alarm}</li>
    );
    return (
      <div className="ui grid page alarm-list-container">
        <div className="ui grid stackable sixteen wide column">
          <div>
            <ul>{alarmItems}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AlarmList;
