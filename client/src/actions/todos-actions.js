import { FETCH_TODOS } from './action-types';

const axios = require('axios');

const fetch_todos = () => (dispatch) => {
    axios.get('/api/todos')
        .then(res => {
            
            dispatch({type: FETCH_TODOS, payload: res.data})
        })
        .catch(err => console.log(err));
}

export {
    fetch_todos
}