/**
 * Created by admin on 12/3/2015.
 */
import React from 'react';
import {connect} from 'react-redux';
import {filterClickAction} from '../actionCreators/actionCreators'

const mapStateToProps = (state, {filter}) => {
    return {
        active: () => filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, {filter}) => {
    return {
        handleFilterClick: () => {
            dispatch(filterClickAction(filter));
        }
    }
};

let FilterLink = ({children, active, handleFilterClick}) => {
    const handleClick = event => {
        event.preventDefault();
        handleFilterClick();
    };

    if (active()) {
        return <span>{children}</span>
    }

    return <a href="#" onClick={handleClick}>{children}</a>;
};

FilterLink = connect(mapStateToProps,mapDispatchToProps)(FilterLink);

export default FilterLink;