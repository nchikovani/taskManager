import React from 'react';
import Button from '../generic/Button';
import Thing from '../Thing';
import store from '../../store';
import {connect} from 'react-redux';
import {openModal} from '../../actions';
import ModalCreateThing from '../Modal/ModalCreateThing/ModalCreateThingContainer';
import './style.scss';

function Things({things}) {
  return (
  <div className="things">
    <div className="things__header">
      <h2>Список дел</h2>
      <Button
      onClick={()=>store.dispatch(openModal(<ModalCreateThing/>))}
      >Создать дело</Button>
    </div>
    <ul className="things__list-things">
      {
        things && things.map(thing => 
          <Thing
            key={thing.id}
          	id={thing.id}
          	text={thing.text}
            displayButtonDelete={true}
          />
        )
      }
    </ul>
  </div>
  );
}
const mapStateToProps = function(store) {
  return {
    things: store.things,
  }
}
export default connect(mapStateToProps)(Things);