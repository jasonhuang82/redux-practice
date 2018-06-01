import React from 'react';
import FilterLink from '~/containers/FilterLink';
import { VisibilityFilters } from '~/actions';
const Footer = () => (
    <div className="d-flex align-items-center">
        <span className="mr-2">Show: </span>
        <div className="btn-group" role="group" aria-label="Basic example">
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                All
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                Active
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                Completed
            </FilterLink>
        </div>
    </div>
);

export default Footer;