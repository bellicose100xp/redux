/**
 * Created by admin on 12/3/2015.
 */
import React from 'react';
import {connect} from 'react-redux';
import {addTodoAction, validateInputAction} from '../actionCreators/actionCreators';

let AddTodo = ({dispatch}) => {
    let input;

    const handleSubmit = event => {
        const text = input.value;
        event.preventDefault();
        if (!input.value) return;
        dispatch(validateInputAction(text));
        dispatch(addTodoAction(text));
        input.value = '';
    };

    return (
        <form>
            <input
                className="form-control"
                ref={node => {
                        input = node;
                    }}
            />
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

AddTodo = connect()(AddTodo); // default behavior is no state, just inject 'dispatch' as prop

export default AddTodo;