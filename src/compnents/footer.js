/**
 * Created by admin on 12/3/2015.
 */
import React from 'react';
import FilterLink from './filterLink';

export default ({visibilityFilter, onFilterClick}) => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter="SHOW_ALL"
            currentFilter={visibilityFilter}
            onClick={onFilterClick}

        >All</FilterLink>
        {', '}
        <FilterLink
            filter="SHOW_ACTIVE"
            currentFilter={visibilityFilter}
            onClick={onFilterClick}
        >Active</FilterLink>
        {', '}
        <FilterLink
            filter="SHOW_COMPLETED"
            currentFilter={visibilityFilter}
            onClick={onFilterClick}
        >Completed</FilterLink>
    </p>
);
