import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function NavbarContainer({ children, className, position, ...props }) {
  return (
    <div
      className={classNames(className, {
        [`navbar-${position}`]: position,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

NavbarContainer.POSITION = {
  START: 'start',
  END: 'end',
};

NavbarContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(['start', 'end']),
};

NavbarContainer.defaultProps = {
  children: null,
  className: undefined,
  position: 'start',
};

export default NavbarContainer;
