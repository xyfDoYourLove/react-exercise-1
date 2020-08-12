import React from 'react';
import './Separator.scss';

class Separator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <hr className="separator" />;
  }
}

Separator.propTypes = {};

export default Separator;
