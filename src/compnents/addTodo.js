/**
 * Created by admin on 12/3/2015.
 */
import React from 'react';
import {connect} from 'react-redux';
import {addTodoAction} from '../actionCreators/actionCreators';

let AddTodo = ({dispatch}) => {
    let input;

    const addTodo = text => {
        dispatch(addTodoAction(text));
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (!input.value) return;
        addTodo(input.value);
        input.value = '';
    };

    return (
        <form>
            <input
                ref={node => {
                        input = node;
                    }}
            />
            <button
                type="submit"
                onClick={handleSubmit}
            >
                Add Todo
            </button>
        </form>
    )
};

AddTodo = connect()(AddTodo); // default behavior is no state, just inject dispatch as prop

export default AddTodo;