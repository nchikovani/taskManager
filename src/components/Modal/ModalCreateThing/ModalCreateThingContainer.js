import React from 'react';
import store from '../../../store';
import ModalCreateThing from './ModalCreateThing';
import {addThing, addPoint, closeModal} from '../../../actions'

function ModalCreateThingContainer (){
  function saveThing(thingText, points) {
    const thingId = store.dispatch(addThing(thingText)).id;
    points.forEach((point) => store.dispatch(addPoint(thingId, point.text)));
    store.dispatch(closeModal());
  }
  return (
    <ModalCreateThing
      saveThing={saveThing}
    />
  );
}

export default ModalCreateThingContainer;