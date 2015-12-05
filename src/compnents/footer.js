/**
 * Created by admin on 12/3/2015.
 */
import React from 'react';
import FilterLink from './filterLink';

export default () => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter="SHOW_ALL"

        >All</FilterLink>
        {', '}
        <FilterLink
            filter="SHOW_ACTIVE"
        >Active</FilterLink>
        {', '}
        <FilterLink
            filter="SHOW_COMPLETED"
        >Completed</FilterLink>
    </p>
);
