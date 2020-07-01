import React from 'react';
import {Link} from 'react-router-dom';
import store from '../../../store';
import {connect} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

function Day({day, date, thisDay, partOfCompletedThings}) {
  let dayOfWeek, background, liStyle;
  if (day === 1) {
  	dayOfWeek = new Date(date).getDay();
  	dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
  }
  if (!thisDay && !isNaN(partOfCompletedThings) && new Date(date) < new Date()) {
    background = `rgba(${150*(1-partOfCompletedThings)}, ${150*partOfCompletedThings}, 0)`;
  }

  liStyle = {background: background};
  if (dayOfWeek !== undefined) liStyle.gridColumnStart = dayOfWeek;
  return (
  <li
  style={liStyle}
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
  partOfCompletedThings: PropTypes.number,
}
const mapStateToProps = function(store, ownProps) {
  const completedThingsOfDayCount = store.thingsOfDay.filter(thing => thing.date === ownProps.date && thing.checked === true).length,
  completedThingsOfDay = store.thingsOfDay.filter(thing => thing.date === ownProps.date).length;
  return {
    partOfCompletedThings: completedThingsOfDayCount/completedThingsOfDay,
  }
}
export default connect(mapStateToProps)(Day);