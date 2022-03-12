import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import COLORS from 'common/constants/colors';

import './button.scss';

const colors = [null, ''].concat(Object.keys(COLORS).map((key) => COLORS[key]));

function Button({
  children,
  className,
  color,
  size,
  outlined,
  inverted,
  state,
  fullwidth,
  loading,
  disabled,
  remove,
  isSelected,
  isStatic,
  rounded,
  onClick,
  text,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      tabIndex={disabled ? -1 : 0}
      disabled={disabled}
      type="button"
      className={classNames(className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size,
        [`is-${state}`]: state,
        'is-selected': isSelected,
        'is-static': isStatic,
        'is-rounded': rounded,
        'is-outlined': outlined,
        'is-inverted': inverted,
        'is-fullwidth': fullwidth,
        'is-loading': loading,
        'is-text': text,
        delete: remove,
        button: !remove,
      })}
      {...props}
    >
      {children}
    </button>
  );
}

Button.COLORS = COLORS;

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  state: PropTypes.oneOf(['hover', 'focus', 'active', 'loading']),
  outlined: PropTypes.bool,
  inverted: PropTypes.bool,
  loading: PropTypes.bool,
  fullwidth: PropTypes.bool,
  disabled: PropTypes.bool,
  remove: PropTypes.bool,
  isSelected: PropTypes.bool,
  isStatic: PropTypes.bool,
  rounded: PropTypes.bool,
  text: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  className: undefined,
  onClick: () => null,
  color: undefined,
  size: undefined,
  state: undefined,
  outlined: false,
  inverted: false,
  fullwidth: false,
  loading: false,
  disabled: false,
  remove: false,
  isSelected: false,
  isStatic: false,
  rounded: false,
  text: false,
};

export default Button;
