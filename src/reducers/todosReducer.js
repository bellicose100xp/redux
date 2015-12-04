/**
 * Created by admin on 12/3/2015.
 */
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            return {
                ...state[action.id],
                completed: !state[action.id].completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return [
                ...state.slice(0, action.id),
                todo(state, action),
                ...state.slice(action.id + 1)
            ];
        default:
            return state;
    }
};

export default todos;