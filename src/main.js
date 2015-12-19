import 'babel-polyfill'
import 'isomorphic-fetch'

import './css/app.css'

import React, {Component} from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import TodoApp from './compnents/todoApp'
import expect from 'expect'
import deepFreeze  from 'deep-freeze'
import store from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.querySelector('#root')
);