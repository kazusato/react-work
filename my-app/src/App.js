import React, {Component} from 'react';

const FuncHello = (props) => {
    return <div>こんにちは、{props.name}さん。</div>;
};

class ClassHello extends Component {
    render() {
        return <div>こんにちは、{this.props.name}様。</div>;
    }
}

const HelloFragment = () => {
    return (
        <React.Fragment>
            <FuncHello name="おおお"/>
            <ClassHello name="かかか"/>
        </React.Fragment>
    );
};

const DefaultPropsHello = (props) => {
    return (
        <div>こんにちは、{props.name}さん。</div>
    );
};
DefaultPropsHello.defaultProps = {
    name: '名無し'
};

// 手元環境では実行時にSyntax errorになった。
/*
const ShortFragment = (name) => {
    return (
        <>
            <FuncHello name="ききき"/>
            <ClassHello name="くくく"/>
        </>
    );
};
*/

class App extends Component {
    render() {
        return (
            <div>
                <FuncHello name="あああ"/>
                <ClassHello name="いいい"/>
                <ClassHello name="ううう"/>
                <ClassHello name="えええ"/>
                <HelloFragment/>
                <DefaultPropsHello name="さささ"/>
                <DefaultPropsHello/>
            </div>
        );
    }
}

export default App;
