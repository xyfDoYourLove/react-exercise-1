import React from 'react';
import TimeLineItem from './TimeLineItem';
import PropTypes from 'prop-types';

class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const containerStyle = {
      width: '100%',
    };
    const timeLineItemList = data.map((itm, index) => {
      return <TimeLineItem {...itm} key={index} />;
    });
    return <div style={containerStyle}>{timeLineItemList}</div>;
  }
}

TimeLine.propTypes = {
  data: PropTypes.array,
};

export default TimeLine;
