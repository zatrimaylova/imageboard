/**
 * @prettier
 */

import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import colors from '../../styles/colors.js';

import { Icon } from '../../ui-kit';

const PhotoCard = (props) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const manageDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return useMemo(() => {
    return (
      <figure
        style={props?.path ? { backgroundImage: `url(${props?.path})` } : null}
        className="figure"
        onClick={manageDescription}
        onMouseLeave={() => setIsDescriptionVisible(false)}
      >
        <div className="transparent">
          <div className="close-section" id={props.id}>
            <button
              title="Delete"
              className="delete-button"
              id={props.path}
              type="button"
              onClick={props.delete}
            >
              <Icon name="cross" width="24px" height="24px" fill={colors.color_main._a} />
            </button>
            {isDescriptionVisible && (
              <div className="details">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <p className="more" onClick={() => props.setOpenModal(props.id)}>
                  more...
                </p>
              </div>
            )}
            <div></div>
          </div>
        </div>
      </figure>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.path, isDescriptionVisible]);
};

/**
 * Properties
 */

PhotoCard.propTypes = {
  path: PropTypes.string,
  id: PropTypes.string,
  delete: PropTypes.func,
  setOpenModal: PropTypes.func,
};

PhotoCard.defaultProps = {
  path: '',
  id: '',
  delete: () => {},
  setOpenModal: () => {},
};

export default PhotoCard;
