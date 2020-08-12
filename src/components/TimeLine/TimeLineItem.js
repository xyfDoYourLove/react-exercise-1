import React from 'react';
import PropTypes from 'prop-types';
import './TimeLineItem.scss';

class TimeLineItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { time, event, content } = this.props;
    return (
      <div className="time-line-itm">
        <div>
          <span className="time">{time}</span>
        </div>
        <div className="content">
          <h3>{event}</h3>
          <p>{content}</p>
        </div>
      </div>
    );
  }
}

TimeLineItem.propTypes = {
  time: PropTypes.number,
  event: PropTypes.string,
  content: PropTypes.string,
};

export default TimeLineItem;
