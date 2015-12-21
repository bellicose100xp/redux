/**
 * Created by admin on 12/3/2015.
 */
import React from 'react';
import {connect} from 'react-redux';
import {addTodoAction, validateInputAction} from '../actionCreators/actionCreators';

const mapStateToProps = state => {
    return {
        valid: state.validateReducer.valid,
        error: state.validateReducer.error
    }
};

let AddTodo = ({valid, error, dispatch}) => {
    let input;

    const handleSubmit = event => {
        const text = input.value;
        event.preventDefault();

        if (!text) {
            dispatch(validateInputAction(false, 'todo field is required'));
            return;
        } else if (text.length <= 2) {
            dispatch(validateInputAction(false, 'todo must be greater than 2 chars'));
            return;
        } else {
            dispatch(validateInputAction(true, ''));
        }

        dispatch(addTodoAction(text));
        input.value = '';
    };

    return (
        <form>
            <div className="form-group">
                <input
                    className="form-control"
                    ref={node => {
                        input = node;
                    }}
                />
            </div>
            {!valid ? <div className="text-danger">{error}</div> : <span />}
            <button
                className="btn btn-primary"
                type="submit"
                onClick={handleSubmit}
            >
                Add Todo
            </button>
        </form>
    )
};

AddTodo = connect(mapStateToProps)(AddTodo); // default behavior is no state, just inject 'dispatch' as prop

export default AddTodo;