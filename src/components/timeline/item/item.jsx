import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '@mdi/react';
import { mdiSchoolOutline, mdiBriefcaseOutline } from '@mdi/js';

import './item.scss';

function Item({ children, className, startYear, endYear, title, secondTitle, type, ...props }) {
  return (
    <div className={classNames('timeline-item', className, `timeline-${type}`)} {...props}>
      <div className={classNames('timeline-content')}>
        <span className={classNames('timeline-content-time')}>
          {startYear} - {endYear}
        </span>
        <span className={classNames('timeline-content-title')}>{title}</span>
        {secondTitle && <span className={classNames('timeline-content-title')}>{secondTitle}</span>}
        <p>{children}</p>
      </div>
      <div className={classNames('timeline-icon')}>
        <Icon
          path={type === 'work' ? mdiBriefcaseOutline : mdiSchoolOutline}
          title={title}
          size={1}
        />
      </div>
    </div>
  );
}

Item.TYPE = {
  EDUCATION: 'education',
  WORK: 'work',
};

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  startYear: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  endYear: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  secondTitle: PropTypes.string,
  type: PropTypes.oneOf(['education', 'work']),
};

Item.defaultProps = {
  children: null,
  className: undefined,
  startYear: 0,
  endYear: 'Present',
  title: undefined,
  secondTitle: undefined,
  type: 'education',
};

export default Item;
