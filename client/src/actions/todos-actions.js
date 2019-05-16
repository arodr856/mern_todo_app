import { FETCH_TODOS, ADD_TODO, TOGGLE_CHECKED } from './action-types';

const axios = require('axios');

const fetch_todos = () => (dispatch) => {
    axios.get('/api/todos')
        .then(res => {
            
            dispatch({type: FETCH_TODOS, payload: res.data})
        })
        .catch(err => console.log(err));
}

const add_todo = (todo) => dispatch => {
    console.log(todo);
    axios.post('/api/todos', todo)
        .then(res => dispatch({type: ADD_TODO, payload: res.data}))
        .catch(err => console.log(err));

}

const toggleChecked = (todo) => dispatch => {
    axios.put(`/api/todos/${todo._id}`, {completed: todo.completed})
        .then(res => dispatch({type: TOGGLE_CHECKED, payload: res.data}))
        .catch(err => console.log(err));
}

export {
    fetch_todos, 
    add_todo,
    toggleChecked
}