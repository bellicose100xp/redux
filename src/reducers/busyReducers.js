/**
 * Created by HSO on 12/9/15.
 */

import {SET_BUSY_INDICATOR, RESET_BUSY_INDICATOR} from '../constants/constants';

export default (state = {busy: false}, action) => {
    switch (action.type) {
        case SET_BUSY_INDICATOR:
            return Object.assign({}, state, {busy: true});
        case RESET_BUSY_INDICATOR:
            return Object.assign({}, state, {busy: false});
        default:
            return state;
    }
}