import React, { Component } from 'react'
import Todo from '../components/Todo';

import { connect } from 'react-redux';

class TodoList extends Component {
  render() {
    return (
      <div>
          
        {this.props.todos.map(todo => {
            return (
                <Todo key={todo._id} todo={todo}/>
            );
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        todos: state.todos.todos
    }
}

export default connect(mapStateToProps)(TodoList);