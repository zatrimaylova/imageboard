/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';

import './styles.scss';

import { Button } from '../';

const Modal = (props) => {
  return (
    <Dialog fullScreen open={props.open} onClose={props.onClose}>
      <div className={`modal-root ${props.className ? props.className : ''}`}>
        {props.title && (
          <div className="modal-header">
            <h2>{props.title ? props.title : ''}</h2>
            {props.onClose && <Button onClick={props.onClose} icon="cross" />}
          </div>
        )}
        <>{props.children}</>
      </div>
    </Dialog>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
};

Modal.defaultProps = {
  onClose: () => {},
  open: false,
  title: null,
  className: '',
};

export default Modal;
