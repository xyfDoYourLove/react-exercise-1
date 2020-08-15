import React from 'react';
import './Header.scss';
import avatar from '../../assets/avatar.jpg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <img src={avatar} className="avatar image-size" alt="avatar" />
        <div className="self-intro">
          <h1>hello,</h1>
          <h1>my name is kamil 24yo and this is my resume/cv</h1>
        </div>
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
