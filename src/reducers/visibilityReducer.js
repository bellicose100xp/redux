/**
 * Created by admin on 12/3/2015.
 */
import {SET_VISIBILITY_FILTER} from '../constants/constants'

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;