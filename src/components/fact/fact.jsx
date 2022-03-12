import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '@mdi/react';

import './fact.scss';

function Fact({ className, icon, total, description, ...props }) {
  return (
    <div className={classNames('fact-item', className)} {...props}>
      <Icon path={icon} title={description} size={1.7} />
      <div className={classNames('fact-item-details')}>
        <h3>{total}</h3>
        <span>{description}</span>
      </div>
    </div>
  );
}

Fact.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  total: PropTypes.number,
  description: PropTypes.string,
};

Fact.defaultProps = {
  className: undefined,
  icon: undefined,
  total: 0,
  description: undefined,
};

export default Fact;
