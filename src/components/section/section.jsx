import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Title from './title';

import './section.scss';

function Section({ children, className, size, ...props }) {
  return (
    <section
      className={classNames('section', className, {
        [`is-${size}`]: size,
      })}
      {...props}
    >
      {children}
    </section>
  );
}

Section.SIZES = {
  MEDIUM: 'medium',
  LARGE: 'large',
};

Section.Title = Title;

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'large']),
};

Section.defaultProps = {
  children: null,
  className: undefined,
  size: undefined,
};

export default Section;
