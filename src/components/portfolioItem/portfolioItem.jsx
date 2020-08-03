import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlexCard from 'components/flexCard';
import Details from './details';

import './portfolioItem.scss';

const PortfolioItem = ({ children, className, ...props }) => {
  return (
    <FlexCard className={classNames('portfolio-item', className)} {...props}>
      {children}
      <div className={classNames('mask')} />
    </FlexCard>
  );
};

PortfolioItem.Details = Details;

PortfolioItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

PortfolioItem.defaultProps = {
  children: null,
  className: undefined,
};

export default PortfolioItem;
