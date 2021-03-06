import React, { Component } from 'react'
import './App.css';
import { fetch_todos } from './actions/todos-actions';

import { connect } from 'react-redux';

import TodoForm from './components/TodoForm';
import TodosTable from './components/TodosTable';

class App extends Component {

  componentDidMount(){
    this.props.fetch_todos();
  }

  render() {
    return (
      <div>
        <TodoForm/>
        <TodosTable/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, {fetch_todos})(App);
