import { ADD_ITEM } from '../actions';

const initialState = {
    todos: 
    'Walk the dog.'
    // [
    //     { value: 'Walk the dog.', completed: false }
    // ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return{
                ...state,
                todos: action.payload 
            };
        default: 
            return state;
    }
}