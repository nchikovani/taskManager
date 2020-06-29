import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../store';
import {deleteThingOfDay, deletePoint, checkThingOfDay} from '../../actions';
import Thing from './Thing';

function ThingOfDayContainer(props) {
  function deleteHandler(id) {
    store.dispatch(deleteThingOfDay(id));
    props.points.forEach(point => {
      store.dispatch(deletePoint(point.id));
    });
  }
  function checkThing(e, id) {
    store.dispatch(checkThingOfDay(id, e.target.checked));
  }
  return (
    <Thing
      deleteHandler={deleteHandler}
      checkThing={checkThing}
      {...props}
    />
  );
}
ThingOfDayContainer.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  points: PropTypes.array,
  displayButtonDelete: PropTypes.bool,
  displayCheckbox: PropTypes.bool,
}
const mapStateToProps = function(store, ownProps) {
    const points = store.points.filter((point) => point.thingId === ownProps.id);
    return {
        points,
    }
}
export default connect(mapStateToProps)(ThingOfDayContainer);