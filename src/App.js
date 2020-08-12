import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Separator from './components/Separator/Separator';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <Separator />
        <AboutMe />
        <Education />
      </main>
    );
  }
}

export default App;
