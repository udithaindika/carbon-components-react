import React from 'react';
import classNames from 'classnames';
import '@console/bluemix-components/consumables/scss/components/card/card.scss';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

const CardActions = ({ children, className }) => {
  const cardActionClasses = classNames({
    'bx--card-footer__app-actions': true,
    [className]: className,
  });

  return (
    <div className={cardActionClasses}>
      {children}
    </div>
  );
};

CardActions.propTypes = propTypes;

export default CardActions;