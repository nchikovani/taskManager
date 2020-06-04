import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

function Day() {
  return (
    <Link
      to="/day/1"
      className="calendar__day"
    >
      1
    </Link>
  );
}
export default Day;