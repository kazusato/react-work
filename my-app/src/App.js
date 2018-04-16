import React, {Component} from 'react';
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
    for (let i = 0; i < names.length; i++) {
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

const input2Str = "ある値";

// 要素名が変数になる場合は、React.createElementを使った方が楽。
const printHeadding = (level, child) => {
    return React.createElement(`h${level}`, {}, child);
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Hello, {getFullname('ryoma')}</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {nameListTitle}
                {nameList}
                <div>
                    <label htmlFor="input1">項目1: </label>
                    <input id="input1" type="text" value="some value"/><br/>
                    <label htmlFor="input2">項目2: </label>
                    <input id="input2" type="text" value={input2Str}/>
                </div>
                <div>
                    <label htmlFor="input3">項目3: </label>
                    <input id="input3" type="text" value="text text text"/><br/>
                    <input type="checkbox" checked/>選択肢1<br/>
                    <input type="checkbox" checked={true}/>選択肢2<br/>
                    <input type="checkbox" checked={false}/>選択肢3<br/>
                    <label htmlFor="input4">項目4: </label>
                    <input id="input4" type="text" onClick={() => {console.log(new Date().toLocaleString())}}/>
                </div>
                <div className="hotarea">
                    <span>ここはhotareaです。</span>
                </div>
                {printHeadding(1, "見出し1")}
                {printHeadding(2, "見出し2")}
                {printHeadding(3, "見出し3")}
                {printHeadding(4, "見出し4")}
                {printHeadding(5, "見出し5")}
                {printHeadding(6, "見出し6")}
            </div>
        );
    }
}

export default App;
