import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BREAKPOINTS from 'common/constants/breakpoints';

import Column from './column';

import './columns.scss';

const breakpoints = [null].concat(Object.keys(BREAKPOINTS).map((key) => BREAKPOINTS[key]));

function Columns({
  children,
  className,
  breakpoint,
  gapless,
  multiline,
  centered,
  vCentered,
  ...props
}) {
  return (
    <div
      className={classNames('columns', className, {
        [`is-${breakpoint}`]: breakpoint,
        'is-gapless': gapless,
        'is-multiline': multiline,
        'is-centered': centered,
        'is-vcentered': vCentered,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

Columns.Column = Column;
Columns.BREAKPOINTS = BREAKPOINTS;

Columns.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Breakpoint where columns become stacked.
   */
  breakpoint: PropTypes.oneOf(breakpoints),
  /**
   * `true` to remove space between columns
   */
  gapless: PropTypes.bool,
  /**
   * `true` if you want to use more than one line if you add more column elements that would fit in a single row.
   */
  multiline: PropTypes.bool,
  /**
   * `true` you want the columns inside to be horizontaly centered
   */
  centered: PropTypes.bool,
  /**
   * `true` if you want to vertically align columns
   */
  vCentered: PropTypes.bool,
};

Columns.defaultProps = {
  children: null,
  className: undefined,
  breakpoint: undefined,
  gapless: false,
  centered: false,
  vCentered: false,
  multiline: true,
};

export default Columns;
