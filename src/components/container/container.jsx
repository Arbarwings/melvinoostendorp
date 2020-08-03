import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BREAKPOINTS from 'common/constants/breakpoints';

import './container.scss';

const breakpoints = [null].concat(Object.keys(BREAKPOINTS).map((key) => BREAKPOINTS[key]));

const Container = ({ children, fluid, breakpoint, className, ...props }) => {
  return (
    <div
      className={classNames('container', className, {
        'is-fluid': fluid,
        [`is-${breakpoint}`]: breakpoint,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

Container.BREAKPOINTS = BREAKPOINTS;

Container.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.bool,
  breakpoint: PropTypes.oneOf(breakpoints),
  className: PropTypes.string,
};

Container.defaultProps = {
  children: null,
  fluid: false,
  breakpoint: undefined,
  className: undefined,
};

export default Container;
