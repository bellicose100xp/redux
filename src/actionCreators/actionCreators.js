/**
 * Created by admin on 12/4/2015.
 */
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    FIREBASE_URL,
    UPDATE_TODOS_FROM_SERVER,
    FIREBASE_URL_NO_JSON,
    SET_BUSY_INDICATOR,
    RESET_BUSY_INDICATOR,
    VALIDATE_INPUT
} from '../constants/constants';
import _ from 'lodash';
import Firebase from 'firebase';
const ref = new Firebase(FIREBASE_URL_NO_JSON);
import store from '../store/store';

const convertToArray = data => {
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            data[key].key = key;
        }
    }
    return _.values(data);
};

// it fires once in the beginning and then every time there's a change
ref.on('value', snapshot => {
    const dataAsArray = convertToArray(snapshot.val());
    store.dispatch({
        type: UPDATE_TODOS_FROM_SERVER,
        dataAsArray
    })
});

export const requestAllTodos = () => dispatch =>
    fetch(FIREBASE_URL)
        .then(res => res.json())
        .then(data => {
            const dataAsArray = convertToArray(data);
            dispatch({
                type: UPDATE_TODOS_FROM_SERVER,
                dataAsArray
            })
        });

export const addTodoAction = text => dispatch => {

    dispatch({type: SET_BUSY_INDICATOR});

    return fetch(FIREBASE_URL, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: text,
            completed: false
        })
    })
        .then(res => res.json())
        .then(data => {
            dispatch({type: RESET_BUSY_INDICATOR});
        })
        .catch(err => {
            dispatch({type: RESET_BUSY_INDICATOR});
            console.log('add request failed: ', err);
        });
};


export const filterClickAction = filter => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
};

export const toggleTodoAction = (key, completed) => dispatch => {
    dispatch({type: SET_BUSY_INDICATOR});
    fetch(`${FIREBASE_URL_NO_JSON}${key}.json`, {
        method: 'PATCH',
        body: JSON.stringify({
            completed: !completed
        })
    })
        .then(res => res.json())
        .then(data => {
            dispatch({type: RESET_BUSY_INDICATOR});
        })
        .catch(err => {
            dispatch({type: RESET_BUSY_INDICATOR});
            console.log('toggle request failed: ', err);
        });
};

export const deleteTodoAction = key => dispatch => {
    dispatch({type: SET_BUSY_INDICATOR});
    fetch(`${FIREBASE_URL_NO_JSON}${key}.json`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            dispatch({type: RESET_BUSY_INDICATOR});
        })
        .catch(err => {
            dispatch({type: RESET_BUSY_INDICATOR});
            console.log('toggle request failed: ', err);
        });
};

export const setBusyAction = () => {
    store.dispatch({
        type: SET_BUSY_INDICATOR
    })
};

export const resetBusyAction = () => {
    store.dispatch({
        type: RESET_BUSY_INDICATOR
    })
};

export const validateInputAction = (validityStatus, errorText) => {
    return {
        type: VALIDATE_INPUT,
        validityStatus,
        errorText
    }
};
