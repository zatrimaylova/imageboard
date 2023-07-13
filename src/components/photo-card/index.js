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
          <div id={props.id}>
            {props.default ? (
              <button
                title="Delete"
                className="delete-button"
                id={props.id}
                type="button"
                onClick={() => props.delete(props.id)}
              >
                <Icon name="cross" width="24px" height="24px" fill={colors.color_main._a} />
              </button>
            ) : (
              !props.isAdded && (
                <button
                  title="Delete"
                  className="delete-button"
                  id={props.id}
                  type="button"
                  onClick={() => props.add(props.id)}
                >
                  <Icon name="plus" width="24px" height="24px" fill={colors.color_main._a} />
                </button>
              )
            )}
            {isDescriptionVisible && (
              <div className="details">
                <h3>{props.name}</h3>
                <div className="text">
                  <p>{props.description}</p>
                </div>
                {props.default && (
                  <p className="more" onClick={() => props.setOpenModal(props.id)}>
                    more...
                  </p>
                )}
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
  add: PropTypes.func,
  setOpenModal: PropTypes.func,
  default: PropTypes.bool,
  isAdded: PropTypes.bool,
};

PhotoCard.defaultProps = {
  path: '',
  id: '',
  delete: () => {},
  add: () => {},
  setOpenModal: () => {},
  default: true,
  isAdded: false,
};

export default PhotoCard;
