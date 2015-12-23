/**
 * Created by admin on 12/3/2015.
 */
import React from 'react'
import {connect} from 'react-redux'
import {addTodoAction, validateInputAction} from '../actionCreators/actionCreators'
import Rx from 'rx'

const mapStateToProps = state => {
    return {
        valid: state.validateReducer.valid,
        error: state.validateReducer.error
    }
};

const validateInputUtil = (text, dispatch) => {
    if (!text) {
        dispatch(validateInputAction(false, 'todo field is required'));
    } else if (text.length <= 2) {
        dispatch(validateInputAction(false, 'todo must be greater than 2 chars'));
    } else {
        dispatch(validateInputAction(true, ''));
        return true;
    }
};


class AddTodo extends React.Component {
    constructor() {
        super()
    }

    componentDidMount = () => {
        const todoInput = document.querySelector('#todoInput');

        Rx.Observable.fromEvent(todoInput, 'keyup')
            .pluck('target', 'value')
            .debounce(500)
            .distinctUntilChanged()
            .subscribe(data => {
                validateInputUtil(data, this.props.dispatch)
            }, err => {
                console.log(err);
            });
    };

    render() {
        let input;
        const {valid, error, dispatch} = this.props;

        const handleSubmit = event => {
            const text = input.value;
            event.preventDefault();
            const returnStatus = validateInputUtil(text, dispatch);
            if (!returnStatus) return;
            dispatch(addTodoAction(text));
            input.value = '';
        };

        //const handleOnChange = event => {
        //    const text = event.target.value;
        //    validateInputUtil(text);
        //};

        return (
            <form>
                <div className="form-group">
                    <input
                        id="todoInput"
                        className="form-control"
                     //   onChange={handleOnChange}
                        ref={node => {
                        input = node;
                    }}
                    />
                </div>
                {!valid ? <div className="text-danger">{error}</div> : <span />}
                <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Add Todo
                </button>
            </form>
        )
    }
}

// default behavior of connect is no state, just inject 'dispatch' as prop
export default connect(mapStateToProps)(AddTodo);