/**
 * Created by HSO on 12/19/15.
 */
import {VALIDATE_INPUT} from '../constants/constants'

export default (state = {
    valid: true,
    error: ''
}, action) => {
    switch (action.type) {
        case VALIDATE_INPUT:
            return action.text.length < 2 ? Object.assign({}, state, {
                valid:false,
                error: 'Todo must be more than 2 characters'
            }) : Object.assign({}, state, {
                valid: true,
                error: ''
            });
        default:
            return state;
    }
}