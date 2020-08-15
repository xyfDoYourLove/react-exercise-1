import React from 'react';
import './SplitLine.scss';

class Separator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <hr className="separator" />;
  }
}

export default Separator;
