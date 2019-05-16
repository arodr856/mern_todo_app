import { FETCH_TODOS, ADD_TODO, TOGGLE_CHECKED } from '../actions/action-types';

const initialState = {
    todos: []
}

const todosReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TODOS:
            return {...state, todos: action.payload};
           
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case TOGGLE_CHECKED:
            return {...state, todos: state.todos.map(todo => {
                if(todo._id === action.payload._id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })}

        default:
            return state;
    }
}

export default todosReducer;