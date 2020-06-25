import React from 'react';
import store from '../../../store';
import ModalCreateThing from './ModalCreateThing';
import {addThingOfDay, addPoint, closeModal} from '../../../actions'

function ModalCreateThingOfDayContainer (props){
  function saveThing(thingText, points) {
    const thingId = store.dispatch(addThingOfDay(thingText, props.date)).id;
    points.forEach((point) => store.dispatch(addPoint(thingId, point.text)));
    store.dispatch(closeModal());
  }
  return (
    <ModalCreateThing
      saveThing={saveThing}
    />
  );
}

export default ModalCreateThingOfDayContainer;