import React, { Component } from 'react';
import './App.scss';
import UserAvatar from './components/UserAvatar';
import Title from './components/Title';
import { Divider } from 'antd';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
// import avatarImg from './assets/avatar.jpg';

class App extends Component {
  render() {
    return (
      <main className="app">
        <UserAvatar />
        <Title />
        {/* <div className="divider">
          <Divider />
        </div> */}
        <Divider />
        <AboutMe />
        <Education />
      </main>
    );
  }
}

export default App;
