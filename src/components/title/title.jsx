import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './title.scss';

function Title({ children, className, size, subtitle, weight, spaced, ...props }) {
  return (
    <h1
      className={classNames(className, {
        title: !subtitle,
        subtitle,
        [`is-${size}`]: size,
        [`has-text-weight-${weight}`]: weight,
        'is-spaced': spaced && !subtitle,
      })}
      {...props}
    >
      {children}
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  subtitle: PropTypes.bool,
  weight: PropTypes.oneOf(['light', 'normal', 'semibold', 'bold']),
  spaced: PropTypes.bool,
};

Title.defaultProps = {
  children: null,
  className: undefined,
  size: undefined,
  subtitle: false,
  weight: undefined,
  spaced: false,
};

export default Title;
