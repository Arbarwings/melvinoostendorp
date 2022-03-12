import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ShowContext } from '../context';

import './navbarBurger.scss';

function NavbarBurger({ children, className, onClick, ...props }) {
  return (
    <ShowContext.Consumer>
      {(active) => (
        <div
          role="button"
          aria-label="Mobile menu"
          tabIndex="0"
          onClick={onClick}
          className={classNames('navbar-burger', className, {
            'is-active': active,
          })}
          {...props}
        >
          <span />
          <span />
          <span />
        </div>
      )}
    </ShowContext.Consumer>
  );
}

NavbarBurger.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

NavbarBurger.defaultProps = {
  children: null,
  className: undefined,
  onClick: () => {},
};

export default NavbarBurger;
