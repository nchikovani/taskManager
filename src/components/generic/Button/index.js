import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import classNames from 'classnames';

function Button({children, className, onClick, ...attrs}) {
  const classes = classNames(
    "button",
    className
  );
  
  return (
    <button
      className={classes}
      onClick={onClick}
      {...attrs}
    >
    {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: 'button',
  onClick: () => {},
  className: '',
};

export default Button;