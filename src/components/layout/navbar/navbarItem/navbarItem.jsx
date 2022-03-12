import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-scroll';

import './navbarItem.scss';

function NavbarItem({ children, className, to, offset, ...props }) {
  return (
    <Link
      className={classNames('navbar-item', className)}
      {...props}
      activeClass={classNames('is-active')}
      to={to}
      spy
      smooth
      offset={offset}
      duration={500}
    >
      {children}
    </Link>
  );
}

NavbarItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string,
  offset: PropTypes.number,
};

NavbarItem.defaultProps = {
  children: null,
  className: undefined,
  to: '',
  offset: -110,
};

export default NavbarItem;
