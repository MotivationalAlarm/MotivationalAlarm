import React from 'react';
import $ from 'jquery';
import '../styles/AlarmListItem.css';

//Functional stateless component
const AlarmListItem = (props) => (
  <div className="ui page grid sixteen wide column alarm-list-item">
    <div className="six wide column">
      <div className="image">Image</div>
    </div>
    <div className="ten wide column">
      <div>{props.time}</div>
      <div><a href={props.youtubeAddress} target="_blank">{props.youtubeAddress}</a></div>
    </div>
  </div>
);

export default AlarmListItem;