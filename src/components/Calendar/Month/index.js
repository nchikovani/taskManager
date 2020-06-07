import React from 'react';
import './style.scss';
import Day from '../Day';
import PropTypes from 'prop-types'

function Month({month, today}) {
  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    daysCount = 32 - new Date(month.getFullYear(), month.getMonth(), 32).getDate(),
    arrayOfDays = [];
  for (let i =1; i <= daysCount; i++) {
    let thisDay = false;
    const date = `${month.getFullYear()}-${month.getMonth()+1}-${i}`;

    if (month.getFullYear() === today.getFullYear() &&
        month.getMonth() === today.getMonth() &&
        i === today.getDate()) {
      thisDay = true;
    }
    arrayOfDays.push( 
        <Day
          day = {i}
          key = {date}
          date = {date}
          thisDay = {thisDay}
        />
    );
  }
  return (
    <div className="calendar__month">
      <h2 className="calendar__month-name">{`${monthNames[month.getMonth()]} ${month.getFullYear()}`}</h2>
      <ul className="calendar__list-days">
        {
          arrayOfDays
        }
      </ul>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.instanceOf(Date),
  today: PropTypes.instanceOf(Date),
}
export default Month;