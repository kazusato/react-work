import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const fullnames = {
  ryoma: '坂本龍馬',
  taka: '西郷隆盛',
  kai: '勝海舟',
};
const getFullname = nickname => fullnames[nickname];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello, {getFullname('ryoma')}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
