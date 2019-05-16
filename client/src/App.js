import React, { Component } from 'react'
import './App.css';
import { fetch_todos } from './actions/todos-actions';

import { connect } from 'react-redux';


class App extends Component {

  componentDidMount(){
    this.props.fetch_todos();
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps, {fetch_todos})(App);
