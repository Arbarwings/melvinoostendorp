import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '@mdi/react';
import { mdiDotsHorizontal } from '@mdi/js';

const Details = ({ title, children, className, ...props }) => {
  return (
    <div className={classNames('details', className)} {...props}>
      {title}
      <span className={classNames('more-info-button')}>
        <Icon path={mdiDotsHorizontal} title="More info" size={1} />
      </span>
    </div>
  );
};

Details.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

Details.defaultProps = {
  title: undefined,
  children: null,
  className: undefined,
};

export default Details;
