import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: 'デフォルトTODO', id: 0 },
      ],
      uniqueId: 1,
    };
    this.resetTodo = this.resetTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  resetTodo() {
    this.setState({
      tasks: [],
    });
  }

  addTodo(title) {
    const {
      tasks,
      uniqueId
    } = this.state;

    tasks.push({
      title,
      id: uniqueId,
    });

    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>リセット</button>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
