import { FETCH_TODOS, ADD_TODO, TOGGLE_CHECKED, DELETE_TODO} from '../actions/action-types';

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

        case DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => {
                if(todo._id === action.payload._id){
                    return false;
                }else{
                    return true;
                }
            })}

        default:
            return state;
    }
}

export default todosReducer;