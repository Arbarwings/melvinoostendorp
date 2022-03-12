import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function NavbarBrand({ children, className, ...props }) {
  return (
    <div className={classNames('navbar-brand', className)} {...props}>
      {children}
    </div>
  );
}

NavbarBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

NavbarBrand.defaultProps = {
  children: null,
  className: undefined,
};

export default NavbarBrand;
