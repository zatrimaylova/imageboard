/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { Modal } from '../../../ui-kit';

const ShowDetails = (props) => {
  return (
    <Modal
      title="Picture details"
      open={props.open}
      onClose={props.close}
      className="modal-details"
    >
      <div className="view-details">
        <div
          className="modal-details-picture"
          style={props?.path ? { backgroundImage: `url(${props?.path})` } : null}
        ></div>
        <aside>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <div>
            <span>Tags:</span>
            <div>
              {props.tags?.map((tag, index) => (
                <span key={`${tag}${index}`}>{` #${tag}`}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Modal>
  );
};

/**
 * Properties
 */

ShowDetails.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
};

ShowDetails.defaultProps = {
  open: false,
  close: () => {},
};

export default ShowDetails;
