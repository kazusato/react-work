import React, {Component} from 'react';

const FuncHello = (props) => {
    return <div>こんにちは、{props.name}さん。</div>;
}

class ClassHello extends Component {
    render() {
        return <div>こんにちは、{this.props.name}様。</div>;
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <FuncHello name="あああ"/>
                <ClassHello name="いいい"/>
                <ClassHello name="ううう"/>
                <ClassHello name="えええ"/>
            </div>
        );
    }
}

export default App;
