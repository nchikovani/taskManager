import React from 'react';
import {connect} from 'react-redux';
import './style.scss';

function Thing({id, text, points}) {
  return (
    <li className="thing-of-day">
      <h3>{text}</h3>
      <ul className="thing-of-day__list-points">
        {
          points.map(point => 
            <li key={point.id} className="point">{point.text}</li>
          )
        }
      </ul>
    </li>
  );
}
const mapStateToProps = function(store, ownProps) {
    const points = store.points.filter((point) => point.thingId === ownProps.id);
    return {
        points,
    }
}
export default connect(mapStateToProps)(Thing);