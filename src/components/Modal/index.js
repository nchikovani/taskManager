import React from 'react';
import './style.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import store from '../../store';
import {closeModal} from '../../actions';

function Modal({isOpen, child}) {

  return (
    <div className={classNames("modal-container", isOpen && "modal-container_active")}>
      <div className="modal">
      	<div className="modal__header">
      	  <button
      	  	className="close-modal"
      	  	onClick={()=>store.dispatch(closeModal())}
      	  ><i className="fas fa-times"></i></button>
      	</div>
      	<div className="modal__body">
      		{child}
      	</div>
      </div>
    </div>
  )
}

Modal.propTyeps = {
	isOpen: PropTypes.bool,
	child: PropTypes.element,
}
export default Modal;