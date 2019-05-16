import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
  render() {
    return (
      <div>
        {this.props.todo.todo}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{

    }
}

export default connect(mapStateToProps, {})(Todo);
