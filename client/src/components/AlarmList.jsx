import React from 'react';
import $ from 'jquery';
import '../styles/AlarmList.css';
import AlarmListItem from './AlarmListItem.jsx';

class AlarmList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alarms: [
      {
        time: '12:00',
        youtubeAddress: 'https://www.youtube.com/watch?v=fLeJJPxua3E',
        youtubeImage: 'null'
      },
      {
        time: '2:30',
        youtubeAddress: 'https://www.youtube.com/watch?v=49yUq3BWg5s',
        youtubeImage: 'null'
      },
      {
        time: '7:00',
        youtubeAddress: 'https://www.youtube.com/watch?v=YlTV8nUlAnA',
        youtubeImage: 'null'
      }
      ]
    }
  }

  componentDidMount() {
  }

  render() {
    const alarmItems = this.state.alarms.map((alarm, index) =>
      <AlarmListItem key={index} time={alarm.time} youtubeAddress={alarm.youtubeAddress} />
    );
    return (
      <div className="ui page grid alarm-list">
        {alarmItems}
      </div>
    )
  }
}

export default AlarmList;
