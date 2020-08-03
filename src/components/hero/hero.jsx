import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import COLORS from 'common/constants/colors';

import HeroHead from './heroHead';
import HeroBody from './heroBody';
import HeroFooter from './heroFooter';

import './hero.scss';

const colors = [null].concat(Object.keys(COLORS).map((key) => COLORS[key]));

const Hero = ({ children, className, color, size, ...props }) => {
  return (
    <section
      className={classNames('hero', className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size,
      })}
      {...props}
    >
      {children}
    </section>
  );
};

Hero.COLORS = COLORS;
Hero.SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  FULLHEIGHT: 'fullheight',
};

Hero.Head = HeroHead;

Hero.Body = HeroBody;

Hero.Footer = HeroFooter;

Hero.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'fullheight']),
};

Hero.defaultProps = {
  children: null,
  className: undefined,
  color: undefined,
  size: undefined,
};

export default Hero;
