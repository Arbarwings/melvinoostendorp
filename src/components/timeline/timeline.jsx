import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlexCard from 'components/flexCard';
import Item from './item';

import './timeline.scss';

function Timeline({ children, className, ...props }) {
  return (
    <FlexCard className={classNames('timeline', className)} {...props}>
      {children}
      <span className={classNames('timeline-line')} />
    </FlexCard>
  );
}

Timeline.Item = Item;

Timeline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Timeline.defaultProps = {
  children: null,
  className: undefined,
};

export default Timeline;
