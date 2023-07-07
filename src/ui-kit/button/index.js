/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import colors from '../../styles/colors';

import { Icon } from '../';

const Button = (props) => {
  return (
    <div className="button" onClick={props.onClick}>
      <button type="button">
        {props.label && <span>{props.label}</span>}
        {props.icon && (
          <Icon name={props.icon} height="26px" width="26px" fill={colors.color_white._a} />
        )}
      </button>
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
