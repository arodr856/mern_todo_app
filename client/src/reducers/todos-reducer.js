import { FETCH_TODOS } from '../actions/action-types';

const initialState = {
    todos: []
}

const todosReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TODOS:
            return {...state, todos: action.payload};
            
        default:
            return state;
    }
}

export default todosReducer;