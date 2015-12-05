/**
 * Created by admin on 12/4/2015.
 */
let nextTodoId = 0;

export const addTodoAction = text => {
    return {
        type: 'ADD_TODO',
        text,
        id: nextTodoId++
    }
};

export const filterClickAction = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodoAction = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};