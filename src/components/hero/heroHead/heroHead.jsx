import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeroHead = ({ children, className, ...props }) => {
  return (
    <div className={classNames('hero-head', className)} {...props}>
      {children}
    </div>
  );
};

HeroHead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

HeroHead.defaultProps = {
  children: null,
  className: undefined,
};

export default HeroHead;
