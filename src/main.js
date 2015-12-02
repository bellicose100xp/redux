import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import {createStore, combineReducers} from 'redux';
import deepFreeze  from 'deep-freeze';

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            return {
                ...state[action.id],
                completed: !state[action.id].completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return [
                ...state.slice(0, action.id),
                todo(state, action),
                ...state.slice(action.id + 1)
            ];
        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const todoApp = combineReducers({todos, visibilityFilter});
const store = createStore(todoApp);

const FilterLink = ({filter, children}) => {
    const handleClick = event => {
        event.preventDefault();
        store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
        });
    };
    return <a href="#" onClick={handleClick}>{children}</a>;
};

const getVisibleTodos = (todos, filter) => {
    switch (filter){
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

let nextTodoId = 0;

class TodoApp extends Component {
    render() {
        const addTodo = () => {
            store.dispatch({
                type: 'ADD_TODO',
                text: this.input.value,
                id: nextTodoId++
            });
            this.input.value = '';
        };

        const toggleTodo = todo => {
            store.dispatch({
                type: 'TOGGLE_TODO',
                id: todo.id
            })
        };
        const visibleTodos = getVisibleTodos(this.props.todos, this.props.visibilityFilter);

        return (
            <div>
                <input
                    ref={node => {
                        this.input = node;
                    }}
                />
                <button onClick={addTodo}>
                    Add Todo
                </button>
                <ul>
                    {visibleTodos.map(todo =>
                        <li
                            key={todo.id}
                            onClick={toggleTodo.bind(null, todo)}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }}
                        >
                            {todo.text}
                        </li>
                    )}
                </ul>
                <p>
                    Show:
                    {' '}
                    <FilterLink
                        filter="SHOW_ALL"
                    >All</FilterLink>
                    {' '}
                    <FilterLink
                        filter="SHOW_ACTIVE"
                    >Active</FilterLink>
                    {' '}
                    <FilterLink
                        filter="SHOW_COMPLETED"
                    >Completed</FilterLink>
                </p>
            </div>
        )
    }
}

const render = () => {
    ReactDOM.render(
        <TodoApp
            {...store.getState()}
        />,
        document.querySelector('#root')
    )
};

store.subscribe(render);
render();

