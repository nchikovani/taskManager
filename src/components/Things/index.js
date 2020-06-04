import React from 'react';
import Button from '../generic/Button';
import Thing from '../Thing';
import './style.scss';

function Things() {
  return (
	<div className="things">
	  <div className="things__header">
	  	<h2>Список дел</h2>
	  	<Button>Создать дело</Button>
	  </div>
	  <ul className="things__list-things">
	  	<li className="things__list-things__item">
	  		<Thing/>
	  	</li>
	  	<li className="things__list-things__item">
	  		<Thing/>
	  	</li>
	  </ul>
	</div>
  );
}

export default Things;