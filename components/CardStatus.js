import React from 'react';
import classNames from 'classnames';
import '@console/bluemix-components/consumables/scss/components/card/card.scss';

const propTypes = {
  status: React.PropTypes.number,
  className: React.PropTypes.string,
  statusTextArray: React.PropTypes.array,
};

const defaultProps = {
  status: 0,
  statusTextArray: ['Running', 'Not Running', 'Stopped'],
};

const appStatus = {
  RUNNING: 0,
  NOT_RUNNING: 1,
  STOPPED: 2,
};

function createCardStatusContent(status, statusTextArray) {
  const cardStatusArray = ['running', 'not-running', 'stopped'];
  const statusText = cardStatusArray[status];
  if (statusText) {
    const cardStatusClassName = `bx--card-footer__app-status--${statusText} active`;
    const cardStatusTextClassName = `bx--${statusText}__text`;
    return (
      <div className={cardStatusClassName}>
        <div className={cardStatusTextClassName}>{statusTextArray[status]}</div>
      </div>
    );
  }
  return '';
}

const CardStatus = ({ className, status, statusTextArray }) => {
  const cardStatusClasses = classNames({
    'bx--card-footer__app-status': true,
    [className]: className,
  });

  return (
    <div className={cardStatusClasses}>
      {createCardStatusContent(status, statusTextArray)}
    </div>
  );
};

CardStatus.propTypes = propTypes;
CardStatus.defaultProps = defaultProps;
CardStatus.appStatus = appStatus;

export default CardStatus;