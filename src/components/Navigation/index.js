import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

function Navigation({displayedLinks}) {
  return(
    <nav className="navigation">
      <ul className="navigation__list">
        {displayedLinks.includes('calendar') &&
          <li className="navigation__item">
	        <Link
	          to='/'
	      	>Календарь</Link>
	   	  </li>
        }
        {displayedLinks.includes('things') &&
          <li className="navigation__item navigation__item-things">
	        <Link
	          to='/things'
	      	>Список дел</Link>
	   	  </li>
        }      
      </ul>
    </nav>
  )
}
export default Navigation;