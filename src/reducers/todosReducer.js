/**
 * Created by admin on 12/3/2015.
 */
import fetch from 'isomorphic-fetch'
import {ADD_TODO, TOGGLE_TODO, FIREBASE_URL, UPDATE_TODOS_FROM_SERVER} from '../constants/constants'
import _ from 'lodash'
import store from '../store/store';

fetch(FIREBASE_URL)
    .then(res => res.json())
    .then(data => {
        for(let key in data){
            if(data.hasOwnProperty(key)){
                data[key].key = key;
            }
        }
        const dataAsArray = _.values(data);
        store.dispatch({
            type: UPDATE_TODOS_FROM_SERVER,
            dataAsArray
        })
    });


const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case TOGGLE_TODO:
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
        case ADD_TODO:
            fetch(FIREBASE_URL, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: action.text,
                    completed: false
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log('add data success', data);
                })
                .catch(err => {
                    console.log('add request failed: ', err);
                });
            return [
                ...state,
                todo(undefined, action)
            ];
        case TOGGLE_TODO:
            return [
                ...state.slice(0, action.id),
                todo(state, action),
                ...state.slice(action.id + 1)
            ];
        case UPDATE_TODOS_FROM_SERVER:
            return action.dataAsArray;
        default:
            return state;
    }
};

export default todos;