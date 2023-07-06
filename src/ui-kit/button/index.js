/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Button = (props) => {
  return (
    <div className="button" autofill="off" onClick={props.onClick}>
      <button type="button">{props.label && <span>{props.label}</span>}</button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  label: '',
};

export default Button;
