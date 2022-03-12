import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function HeroBody({ children, className, ...props }) {
  return (
    <div className={classNames('hero-body', className)} {...props}>
      {children}
    </div>
  );
}

HeroBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

HeroBody.defaultProps = {
  children: null,
  className: undefined,
};

export default HeroBody;
