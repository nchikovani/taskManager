import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../store';
import {deleteThing, deletePoint} from '../../actions';
import Thing from './Thing';

function ThingContainer(props) {
  function deleteHandler(id) {
    store.dispatch(deleteThing(id));
    props.points.forEach(point => {
      store.dispatch(deletePoint(point.id));
    });
  }
  return (
    <Thing
      deleteHandler={deleteHandler}
      {...props}
    />
  );
}
ThingContainer.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  points: PropTypes.array,
  chooseHandler: PropTypes.func,
  selected: PropTypes.bool,
  displayButtonDelete: PropTypes.bool,
}
const mapStateToProps = function(store, ownProps) {
    const points = store.points.filter((point) => point.thingId === ownProps.id);
    return {
        points,
    }
}
export default connect(mapStateToProps)(ThingContainer);