import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '@mdi/react';
import { mdiArrowUpThick } from '@mdi/js';

import './scrollToTop.scss';

function ScrollToTop({ className, ...props }) {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (typeof window !== `undefined`) {
    window.addEventListener('scroll', checkScrollTop);
  }

  return (
    <div
      className={classNames('scroll-to-top', className, {
        'is-active': showScroll,
      })}
      onClick={scrollTop}
      {...props}
    >
      <Icon path={mdiArrowUpThick} title="Scroll to top" size={1} />
    </div>
  );
}

ScrollToTop.propTypes = {
  className: PropTypes.string,
};

ScrollToTop.defaultProps = {
  className: undefined,
};

export default ScrollToTop;
