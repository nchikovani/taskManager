import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

function Thing({id, text, points, checked, chooseHandler, selected, displayButtonDelete, displayCheckbox, deleteHandler, checkThing}) {
  return (
    <li
      className={classNames("thing", selected && "thing_selected")}
      onClick={() => typeof(chooseHandler) === "function" && chooseHandler(id)}
    >
      <label htmlFor={"thing__checkbox"+id}>
        <div className="thing__flex-container">
          <h3>{text}</h3>
          {displayCheckbox && 
          <input
            className="thing__checkbox"
            id={"thing__checkbox"+id}
            type="checkbox"
            checked={checked}
            onChange={(e) => checkThing(e, id)}
          />
          }
          {displayButtonDelete && 
          <button
            onClick={() => deleteHandler(id)}
            className="thing__button-delete"
          ><i className="far fa-trash-alt"></i></button>
          }
        </div>
        <ul className="thing__list-points">
          {
            points && points.map(point => 
              <li key={point.id} className="point">{point.text}</li>
            )
          }
        </ul>
      </label>
    </li>
  );
}
Thing.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  points: PropTypes.array,
  chooseHandler: PropTypes.func,
  selected: PropTypes.bool,
  displayButtonDelete: PropTypes.bool,
  displayCheckbox: PropTypes.bool,
  deleteHandler: PropTypes.func,
  checkThing: PropTypes.func,
}

export default Thing;