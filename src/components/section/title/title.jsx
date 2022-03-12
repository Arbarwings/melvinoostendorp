import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './title.scss';

function Title({ children, className, ...props }) {
  return (
    <h2 className={classNames('section-title', className)} {...props}>
      {children}
    </h2>
  );
}

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Title.defaultProps = {
  children: null,
  className: undefined,
};

export default Title;
