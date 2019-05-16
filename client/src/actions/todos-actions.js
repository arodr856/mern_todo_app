import { FETCH_TODOS, ADD_TODO } from './action-types';

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

export {
    fetch_todos, 
    add_todo
}