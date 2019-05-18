import React, { Component } from 'react'
import { Table } from 'reactstrap';

import { connect } from 'react-redux';
import { toggleChecked, deleteTodo, updateTodo } from '../actions/todos-actions';


class TodosTable extends Component {

  constructor(props){
    super(props);

    this.state = {
      todo: '',
      date: '',
      isEditing: false,
      editID: '',
      priority: 'low',
      pLevels: ['low', 'med', 'high']
    }
  }

  toggleChecked = (todo,event) => {
    this.props.toggleChecked(todo);
  }

  deleteTodo = (todo, event) => {
    this.props.deleteTodo(todo);
  }

  editTodo = (todo, event) => {
    this.setState({isEditing: !this.state.isEditing, editID: todo._id, todo: todo.todo, date: todo.due_date, priority: todo.priority});
  }

  onChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[target.name]: value});
  }

  cancel = (e) => {
    this.setState({isEditing: !this.state.isEditing, editID: '', todo: '', date: '', priority: ''});
  }

  save = (todo, event) => {
    const args = {};
    if(this.state.todo !== todo.todo)
      args.todo = this.state.todo;

    if(this.state.priority !== todo.priority)
      args.priority = this.state.priority;

    if(this.state.date !== todo.due_date)
      args.due_date = this.state.date;
    
    this.props.updateTodo(args, todo._id);
    this.setState({isEditing: !this.state.isEditing, editID: '', todo: '', date: '', priority: ''});
  }

  displayRegularRows = () => {
    return this.props.todos.map(todo => {
      return (
        
          
          <tr key={todo._id}>
            <td> <input type='checkbox' checked={todo.completed} onChange={(e) => {this.toggleChecked(todo, e)}}/></td>
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
            <td><input type='checkbox' checked={todo.completed} onChange={(e) => {this.toggleChecked(todo, e)}}/></td>
            <td><input type='text' name='todo' id='todo' value={this.state.todo} onChange={this.onChange}></input></td>
            <td><input type='datetime-local' name='date' onChange={this.onChange} value={this.state.date}></input></td>
            <td>
              <select name='priority' value={this.state.priority} onChange={this.onChange}>
                {this.state.pLevels.map((level, index)=> {
                    return( 
                        <option key={index} value={level}>{level}</option>
                    );
                })}
              </select>
            </td>
            <td><button onClick={(e) => {this.save(todo, e)}}>Save</button></td>
            <td><button onClick={this.cancel}>Cancel</button></td>
          </tr>
        )
      }

      return (
        <tr key={todo._id}>
          <td><input type='checkbox' checked={todo.completed} onChange={(e) => {this.toggleChecked(todo, e)}}/></td>
          <td>{todo.todo}</td>
          <td>{todo.due_date}</td>
          <td>{todo.priority}</td>
          <td><button disabled onClick={(e) => {this.editTodo(todo, e)}}>Edit</button></td>
          <td><button disabled onClick={e => {this.deleteTodo(todo, e)}}>Delete</button></td>
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
            {this.state.isEditing ? <th>Save</th> : <th>Edit</th>}
            {this.state.isEditing ? <th>Cancel</th> : <th>Delete</th>}
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

export default connect(mapStateToProps, {toggleChecked, deleteTodo, updateTodo})(TodosTable);