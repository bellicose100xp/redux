/**
 * Created by HSO on 12/19/15.
 */
import {INVALID_INPUT} from '../constants/constants'

export default (state = {
    valid: false,
    error: ''
}, action) => {
    switch (action.type) {
        case INVALID_INPUT:
            return Object.assign({}, state, {
                valid: action.validityStatus,
                error: action.errorText
            });
        default:
            return state;
    }
}