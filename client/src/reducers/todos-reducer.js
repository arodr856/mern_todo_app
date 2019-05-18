import { FETCH_TODOS, ADD_TODO, TOGGLE_CHECKED, DELETE_TODO, UPDATE_TODO} from '../actions/action-types';

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
                return (todo._id === action.payload._id) ? false : true;
            })}

        case UPDATE_TODO:
            return {...state, todos: state.todos.map(todo => {
                return (todo._id === action.payload.id) ? Object.assign(todo, action.payload.updatedArgs) : todo;
            })}

        default:
            return state;
    }
}

export default todosReducer;