import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// JSX内に式を埋め込む
const fullnames = {
  ryoma: '坂本龍馬',
  taka: '西郷隆盛',
  kai: '勝海舟',
};
const getFullname = nickname => fullnames[nickname];

// 関数の戻り値にJSXを使う
function Hello(name) {
  if (typeof name === 'string') {
    return <span>Hello, {name}</span>;
  }
  return <span>Who are you?</span>;
}

// for内でJSXを利用
function Names(names) {
  const list = [];
  for (let i=0; i<names.length; i++) {
    list.push(<li>{Hello(names[i])}</li>);
  }
  return <ul>{list}</ul>;
}

function wrap(component) {
  return <div>{component}</div>
}

const targetList = [
  "田中　一郎",
  "鈴木　二郎",
  3,
  "木村　四郎",
];

// 関数の引数
const nameListTitle = wrap(<h1>名前一覧</h1>);
const nameList = wrap(Names(targetList));

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
        {nameListTitle}
        {nameList}
      </div>
    );
  }
}

export default App;
