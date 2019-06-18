import { ADD_ITEM } from '../actions';

const initialState = {
    todos: [
        { value: 'Walk the dog.', completed: false }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return{
                ...state,
                value: 
            };
        default: 
            return state;
    }
}