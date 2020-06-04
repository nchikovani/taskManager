import React from 'react';
import './style.scss';

function Thing() {

  return (
    <div className="thing">
    	<h3>Сделать дела</h3>
    	<ul className="thing__list-points">
    		<li className="point">Дело 1</li>
    		<li className="point">Дело 2</li>
    		<li className="point">Дело 3</li>
    		<li className="point">Дело 4</li>
    	</ul>
    </div>
  );
}

export default Thing;