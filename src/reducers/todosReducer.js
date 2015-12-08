/**
 * Created by admin on 12/3/2015.
 */
import fetch from 'isomorphic-fetch'
import {FIREBASE_URL, UPDATE_TODOS_FROM_SERVER} from '../constants/constants'
import store from '../store/store';

const todos = (state = [], action) => {
    switch (action.type) {
        case UPDATE_TODOS_FROM_SERVER:
            return action.dataAsArray;
        default:
            return state;
    }
};

export default todos;