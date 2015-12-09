/**
 * Created by admin on 12/3/2015.
 */

import React, {Component} from 'react';
import AddTodo from './addTodo';
import VisibleTodoList from './todoList';
import BusyIndicator from './busyIndicator';
import Footer from './footer';

const TodoApp = () => {

    return (
        <div>
            <AddTodo />
            <BusyIndicator />
            <VisibleTodoList />
            <Footer />
        </div>
    )
};

export default TodoApp;