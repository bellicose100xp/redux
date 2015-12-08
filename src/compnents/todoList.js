/**
 * Created by admin on 12/3/2015.
 */
import React from 'react';
import {connect} from 'react-redux';
import {toggleTodoAction} from '../actionCreators/actionCreators'

const Todo = ({completed, text, id, onTodoClick}) => (
    <li
        onClick={onTodoClick.bind(null, id, completed)}
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
        onTodoClick: (key, completed) => {
            dispatch(toggleTodoAction(key, completed))
        }
    }
};

const TodoList = ({visibleTodos, onTodoClick}) => (
    <ul>
        {visibleTodos.map(todo =>
            <Todo
                key={todo.key}
                onTodoClick={onTodoClick}
                id={todo.key}
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

