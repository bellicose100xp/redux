/**
 * Created by admin on 12/3/2015.
 */
import React from 'react';
import store from '../store/store';

const FilterLink = ({filter, children, currentFilter, onClick}) => {
    const handleClick = event => {
        event.preventDefault();
        onClick(filter);
    };

    if (filter === currentFilter) {
        return <span>{children}</span>
    }

    return <a href="#" onClick={handleClick}>{children}</a>;
};

export default FilterLink;