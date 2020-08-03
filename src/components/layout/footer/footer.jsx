import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './footer.scss';

const Footer = ({ children, className, ...props }) => {
  return (
    <footer className={classNames('footer', className)} {...props}>
      {children}
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Footer.defaultProps = {
  children: null,
  className: undefined,
};

export default Footer;
