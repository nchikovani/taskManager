import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

function Thing({id, text, points, chooseHandler, selected}) {
  return (
    <li
      className={classNames("thing", selected && "thing_selected")}
      onClick={()=>typeof(chooseHandler) === "function" && chooseHandler(id)}
    >
      <h3>{text}</h3>
      <ul className="thing__list-points">
        {
          points && points.map(point => 
            <li key={point.id} className="point">{point.text}</li>
          )
        }
      </ul>
    </li>
  );
}
Thing.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  points: PropTypes.array,
}
const mapStateToProps = function(store, ownProps) {
    const points = store.points.filter((point) => point.thingId === ownProps.id);
    return {
        points,
    }
}
export default connect(mapStateToProps)(Thing);