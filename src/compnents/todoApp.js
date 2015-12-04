/**
 * Created by admin on 12/3/2015.
 */

import React, {Component} from 'react';
import store from '../store/store';
import AddTodo from './addTodo';
import TodoList from './todoList';
import Footer from './footer';

let nextTodoId = 0;

const TodoApp = ({todos, visibilityFilter}) => {

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

        const addTodo = text => {
            store.dispatch({
                type: 'ADD_TODO',
                text,
                id: nextTodoId++
            });
        };

        const toggleTodo = id => {
            store.dispatch({
                type: 'TOGGLE_TODO',
                id: id
            })
        };

        const handleFilterClick = filter => {
            store.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter
            });
        };

        return (
            <div>

                <AddTodo
                    addTodo={addTodo}
                    />

                <TodoList
                    visibleTodos={getVisibleTodos(todos, visibilityFilter)}
                    onTodoClick={toggleTodo}
                />

                <Footer
                    visibilityFilter={visibilityFilter}
                    onFilterClick={handleFilterClick}
                />

            </div>
        )
};

export default TodoApp;