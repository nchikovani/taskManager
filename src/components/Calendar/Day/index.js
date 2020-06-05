import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

function Day({day, date, thisDay}) {
  let dayOfWeek;
  if (day === 1) {
	dayOfWeek = new Date(date).getDay();
	dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
  }
  return (
  <li
  style={dayOfWeek === undefined ? {} : {gridColumnStart: dayOfWeek}}
  >
  	<Link
      to={`/day/${date}`}
      className={classNames("calendar__day", thisDay && "calendar__day__this-day")}
    >
      {day}
    </Link>
  </li>
    
  );
}

Day.propTypes = {
	day: PropTypes.number,
	date: PropTypes.string,
	thisDay: PropTypes.bool,
}
export default Day;