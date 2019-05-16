import React, { Component } from 'react'
import { connect } from 'react-redux';

import { add_todo } from '../actions/todos-actions';

class TodoForm extends Component {

    state = {
        todo: '',
        priority: 'low',
        date: '',
        pLevels: ['low', 'med', 'high']
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.add_todo({
            todo: this.state.todo,
            due_date: this.state.date
        })
    }  

    onChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({[target.name]: value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor='todo'>Todo</label>
                    <input type='text' name='todo' id='todo' placeholder='Add TODO' onChange={this.onChange}></input>
                    <input type='datetime-local' name='date' onChange={this.onChange} checked={this.checked}/>

                    <select onChange={this.onChange}>
                        {this.state.pLevels.map((level, index)=> {
                            return( 
                                <option key={index} value={level}>{level}</option>
                            );
                        })}
                    </select>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {add_todo})(TodoForm);
