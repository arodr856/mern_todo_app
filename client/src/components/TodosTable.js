import React, { Component } from 'react'
import { Table } from 'reactstrap';

import { connect } from 'react-redux';
import { toggleChecked, deleteTodo } from '../actions/todos-actions';


class TodosTable extends Component {

  constructor(props){
    super(props);

    this.state = {
      isEditing: false,
      editID: '',
      priority: 'low',
      pLevels: ['low', 'med', 'high']
    }
  }

  onChange = (todo,event) => {
    this.props.toggleChecked(todo);
  }

  deleteTodo = (todo, event) => {
    this.props.deleteTodo(todo);
  }

  editTodo = (todo, event) => {
    this.setState({isEditing: !this.state.isEditing, editID: todo._id});
  }

  displayRegularRows = () => {
    return this.props.todos.map(todo => {
      return (
        
          
          <tr key={todo._id}>
            <td><input type='checkbox' checked={todo.completed} onChange={(e) => {this.onChange(todo, e)}}/></td>
            <td>{todo.todo}</td>
            <td>{todo.due_date}</td>
            <td>{todo.priority}</td>
            <td><button onClick={(e) => {this.editTodo(todo, e)}}>Edit</button></td>
            <td><button onClick={e => {this.deleteTodo(todo, e)}}>Delete</button></td>
          </tr>
        
      )
    })
  }

  displayEditableRow = () => {
    return this.props.todos.map(todo => {

      if(todo._id === this.state.editID){

        return (
          <tr key={todo._id}>
            <td><input type='text' value={todo.todo}></input></td>
            <td><input type='datetime-local' value={todo.due_date}></input></td>
            <td>
              <select name='priority' value={todo.priority} onChange={this.onChange}>
                {this.state.pLevels.map((level, index)=> {
                    return( 
                        <option key={index} value={level}>{level}</option>
                    );
                })}
              </select>
            </td>
          </tr>
        )
      }

      return (
        <tr key={todo._id}>
          <td><input type='checkbox' checked={todo.completed} onChange={(e) => {this.onChange(todo, e)}}/></td>
          <td>{todo.todo}</td>
          <td>{todo.due_date}</td>
          <td>{todo.priority}</td>
          <td><button onClick={(e) => {this.editTodo(todo, e)}}>Edit</button></td>
          <td><button onClick={e => {this.deleteTodo(todo, e)}}>Delete</button></td>
        </tr>
      
      )
    })
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
            {this.state.isEditing? this.displayEditableRow() :this.displayRegularRows()}
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