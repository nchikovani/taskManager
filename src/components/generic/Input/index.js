import React from 'react';
import './style.scss';
import classNames from 'classnames';

function Input({className, type, ...attrs}) {

  return (
    <input 
      className={classNames("input", className)}
      type={type ? type : "text"}
      {...attrs}
    />
  );
}

export default Input;