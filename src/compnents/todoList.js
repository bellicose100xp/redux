/**
 * Created by admin on 12/3/2015.
 */
import React from 'react';
import {connect} from 'react-redux';

const Todo = ({completed, text, id, onTodoClick}) => (
    <li
        onClick={onTodoClick.bind(null, id)}
        style={{
                textDecoration: completed ? 'line-through' : 'none'
                }}
    >
        {text}
    </li>
);

const mapStateToProps = state => {

    const getVisibleTodos = (todos, filter) => {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_ACTIVE':
                return todos.filter(todo => !todo.completed);
            case 'SHOW_COMPLETED':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    };

    return {
        visibleTodos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            store.dispatch({
                type: 'TOGGLE_TODO',
                id: id
            })
        }
    }
};

const TodoList = ({visibleTodos, onTodoClick}) => (
    <ul>
        {visibleTodos.map(todo =>
            <Todo
                key={todo.id}
                onTodoClick={onTodoClick}
                {...todo}
            />
        )}
    </ul>
);

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;

