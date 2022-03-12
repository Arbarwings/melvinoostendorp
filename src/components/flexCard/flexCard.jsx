import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './flexCard.scss';

function FlexCard({ children, className, triangle, color, ...props }) {
  return (
    <div
      className={classNames('flex-card', className, {
        [`has-triangle-${triangle}`]: triangle,
        [`is-${color}`]: color,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

FlexCard.TRIANGLE = {
  LEFT: 'left',
  TOP: 'top',
};

FlexCard.COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  WHITE: 'white',
  BLUE: 'blue',
  YELLOW: 'yellow',
  RED: 'red',
};

FlexCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  triangle: PropTypes.oneOf(['left', 'top']),
  color: PropTypes.oneOf(['primary', 'secondary', 'white', 'blue', 'yellow', 'red']),
};

FlexCard.defaultProps = {
  children: null,
  className: undefined,
  triangle: undefined,
  color: undefined,
};

export default FlexCard;
