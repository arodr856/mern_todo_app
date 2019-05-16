import React, { Component } from 'react'
import { Table } from 'reactstrap';

import { connect } from 'react-redux';
import { toggleChecked, deleteTodo } from '../actions/todos-actions';


class TodosTable extends Component {

  onChange = (todo,e) => {
    // console.log(todo._id);
    this.props.toggleChecked(todo);
  }

  deleteTodo = (todo, e) => {
    this.props.deleteTodo(todo);
  }

  render() {
    return (
      <div>
        <Table>
        <thead>
          <tr>
            <th>Completed</th>
            <th>Todo</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Delete</th>
          </tr>
          </thead>

          <tbody>
            {this.props.todos.map(todo => {
              return(
                <tr key={todo._id}>
                  <td> <input type='checkbox' checked={todo.completed} onChange={(e) => {this.onChange(todo, e)}}/> </td>
                  <td>{todo.todo}</td>
                  <td>{todo.due_date}</td>
                  <td>{todo.priority}</td>
                  <td> <button onClick={e => {this.deleteTodo(todo, e)}}>Delete</button> </td>
                </tr>
              )
            })}
          </tbody>

        </Table>  
        
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        todos: state.todos.todos
    }
}

export default connect(mapStateToProps, {toggleChecked, deleteTodo})(TodosTable);