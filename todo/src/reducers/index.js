import { ADD_ITEM } from '../actions';

const initialState = {
    todos: [
        { value: 'Walk the dog.', completed: false }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const newItem = { value: action.payload, completed: false }
            return{
                ...state,
                todos: [...state.todos, newItem] 
            };
        default: 
            return state;
    }
}