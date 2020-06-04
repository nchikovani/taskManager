import React from 'react';
import './style.scss';

function Navigation() {

  return(
    <nav className="navigation">
      <ul className="navigation__list">
       <li className="navigation__item">
          <a href="#">Календарь</a>
        </li>
        <li className="navigation__item navigation__item-list">
          <a href="#">Список дел</a>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation;