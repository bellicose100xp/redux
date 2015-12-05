/**
 * Created by admin on 12/3/2015.
 */

import React, {Component} from 'react';
import AddTodo from './addTodo';
import VisibleTodoList from './todoList';
import Footer from './footer';

const TodoApp = () => {

    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    )
};

export default TodoApp;