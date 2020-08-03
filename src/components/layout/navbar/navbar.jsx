import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ShowContext } from './context';
import NavbarBrand from './navbarBrand';
import NavbarContainer from './navbarContainer';
import NavbarMenu from './navbarMenu';
import NavbarBurger from './navbarBurger';
import NavbarItem from './navbarItem';

import './navbar.scss';

const Navbar = ({ children, className, fixed, active, ...props }) => {
  return (
    <ShowContext.Provider value={active}>
      <nav
        className={classNames('navbar', className, {
          [`is-fixed-${fixed}`]: fixed,
        })}
        role="navigation"
        {...props}
      >
        {children}
      </nav>
    </ShowContext.Provider>
  );
};

Navbar.FIXED = {
  TOP: 'top',
  BOTTOM: 'bottom',
};

Navbar.Brand = NavbarBrand;
Navbar.Container = NavbarContainer;
Navbar.Menu = NavbarMenu;
Navbar.Burger = NavbarBurger;
Navbar.Item = NavbarItem;

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fixed: PropTypes.oneOf(['top', 'bottom']),
  active: PropTypes.bool,
};

Navbar.defaultProps = {
  children: null,
  className: undefined,
  fixed: undefined,
  active: false,
};

export default Navbar;
