/**
 * Created by admin on 12/3/2015.
 */
import React from 'react';
import {connect} from 'react-redux';
import {toggleTodoAction, deleteTodoAction} from '../actionCreators/actionCreators'

const Todo = ({completed, text, id, onTodoClick, onDeleteClick}) => (
    <tr>
        <td
            onClick={onTodoClick.bind(null, id, completed)}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
                }}
        >
            {text}
        </td>
        <td onClick={onDeleteClick.bind(null, id)}>
            <span className="glyphicon glyphicon-remove-circle" />
        </td>
    </tr>
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
        },
        onDeleteClick: key => {
            dispatch(deleteTodoAction(key))
        }
    }
};

const TodoList = ({visibleTodos, onTodoClick, onDeleteClick}) => (
    <table className="table table-striped">
        <thead>
        <tr>
            <th>Todos</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {visibleTodos.map(todo => (
            <Todo
                key={todo.key}
                onTodoClick={onTodoClick}
                onDeleteClick={onDeleteClick}
                id={todo.key}
                {...todo}
            />
        ))}
        </tbody>
    </table>
);

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;

