/**
 * Created by admin on 12/3/2015.
 */
import {UPDATE_TODOS_FROM_SERVER} from '../constants/constants';

const todos = (state = [], action) => {
    switch (action.type) {
        case UPDATE_TODOS_FROM_SERVER:
            return action.dataAsArray;
        default:
            return state;
    }
};

export default todos;