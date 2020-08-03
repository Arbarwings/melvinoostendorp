import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeroFooter = ({ children, className, ...props }) => {
  return (
    <div className={classNames('hero-foot', className)} {...props}>
      {children}
    </div>
  );
};

HeroFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

HeroFooter.defaultProps = {
  children: null,
  className: undefined,
};

export default HeroFooter;
