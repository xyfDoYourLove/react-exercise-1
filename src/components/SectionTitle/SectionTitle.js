import React from 'react';
import PropTypes from 'prop-types';
import './SectionTitle.scss';

class SectionTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text } = this.props;
    return <h2 className="section-title">{text}</h2>;
  }
}

SectionTitle.propTypes = {
  text: PropTypes.string,
};

export default SectionTitle;
