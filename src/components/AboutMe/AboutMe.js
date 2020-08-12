import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutMe.scss';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const aboutMe =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.';
    return (
      <div className="about-me">
        <SectionTitle text={'about me'} />
        <p className="content">{aboutMe}</p>
      </div>
    );
  }
}

AboutMe.propTypes = {};

export default AboutMe;
