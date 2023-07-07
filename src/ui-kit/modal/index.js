/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';

import './styles.scss';
import colors from '../../styles/colors.js';

import { Icon, Button } from '../';

const Modal = (props) => {
  return (
    <Dialog fullScreen open={props.open} onClose={props.close}>
      <div className={`modal-root ${props.className ? props.className : ''}`}>
        {props.title && (
          <div className="modal-header">
            <h2>{props.title ? props.title : ''}</h2>
            {props.close && (
              <Button onClick={props.onClose} icon="cross">
                {/* <Icon width="24px" height="24px" name="cross" fill={colors.color_main._a} /> */}
              </Button>
            )}
          </div>
        )}
        <>{props.children}</>
      </div>
    </Dialog>
  );
};

Modal.propTypes = {
  close: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
};

Modal.defaultProps = {
  close: () => {},
  open: false,
  title: null,
};

export default Modal;
