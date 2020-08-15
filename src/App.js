import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import SplitLine from './components/splitLine/SplitLine';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <SplitLine />
        <AboutMe />
        <Education />
      </main>
    );
  }
}

export default App;
