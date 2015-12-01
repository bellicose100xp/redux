import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';

let counter = (state: number, action: Object): number => {
    switch(action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
};

expect(counter(0, {type: 'INC'})).toEqual(1);
expect(counter(1, {type: 'INC'})).toEqual(2);
expect(counter(2, {type: 'DEC'})).toEqual(1);
console.log('All Tests Passed');


class App extends React.Component {
    render() {
        return <h1>Redux all the way!</h1>
    }
}

ReactDOM.render(<App />, document.getElementById('main'));