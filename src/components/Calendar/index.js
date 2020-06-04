import React from 'react';
import './style.scss';
import Month from './Month';

class Calendar extends React.Component {
  
  render() {

    return(
      <div className="calendar">
      	<div className="calendar__change-month-buttons">
          <button className="calendar__change-month-button"><i className="fas fa-chevron-up"></i></button>
          <button className="calendar__change-month-button"><i className="fas fa-chevron-down"></i></button>
        </div>
        <ul className="list-months">
          <li>
            <Month/>
          </li>
          <li>
            <Month/>
          </li>
        </ul>
      </div>
    );
  }
}

export default Calendar;