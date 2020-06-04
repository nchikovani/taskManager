import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

function Day() {
  return (
    <Link
      to="/day/01.04.2020"
      className="calendar__day"
    >
      1
    </Link>
  );
}
export default Day;