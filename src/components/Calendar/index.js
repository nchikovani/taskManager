import React from 'react';
import './style.scss';
import Month from './Month';
import Button from '../generic/Button'

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
  }
  render() {
    return(
      <div className="calendar">
      	<div className="calendar__change-month-buttons">
          <Button className="calendar__change-month-button"><i className="fas fa-chevron-up"></i></Button>
          <Button className="calendar__change-month-button"><i className="fas fa-chevron-down"></i></Button>
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