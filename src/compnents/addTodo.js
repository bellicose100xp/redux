/**
 * Created by admin on 12/3/2015.
 */
import React from 'react';

export default ({addTodo}) => {
    let input;

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