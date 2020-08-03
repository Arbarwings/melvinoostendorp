import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ShowContext } from '../context';

import './navbarMenu.scss';

const NavbarMenu = ({ children, className, ...props }) => {
  return (
    <ShowContext.Consumer>
      {(active) => (
        <div
          className={classNames('navbar-menu', className, {
            'is-active': active,
          })}
          {...props}
        >
          {children}
        </div>
      )}
    </ShowContext.Consumer>
  );
};

NavbarMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

NavbarMenu.defaultProps = {
  children: null,
  className: undefined,
};

export default NavbarMenu;
