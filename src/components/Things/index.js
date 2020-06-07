import React from 'react';
import Button from '../generic/Button';
import Thing from '../Thing';
import store from '../../store';
import {openModal} from '../../actions';
import ModalCreateThing from '../Modal/ModalCreateThing';
import './style.scss';

function Things() {
  return (
	<div className="things">
	  <div className="things__header">
	  	<h2>Список дел</h2>
	  	<Button
			onClick={()=>store.dispatch(openModal(ModalCreateThing))}
	  	>Создать дело</Button>
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