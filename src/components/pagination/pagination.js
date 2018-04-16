import React from 'react';
import pageNumbersCreator from './pagination.services';

import './pagination.css';

const Pagination = (props) => {
    const pageNumbers = pageNumbersCreator(props.totalItems, props.itemsPerPage, props.currentPage)
    return [...Array(Math.ceil(props.totalItems / props.itemsPerPage)).keys()].map(page => {
        return (
            pageNumbers.indexOf(page + 1) > -1 && <button type="button" key={page + 1}
                onClick={() => props.navToPage(page + 1)}
                className={(props.currentPage === page + 1 && 'active') || 'normal'}>
                {page + 1}
            </button>
        );
    });
}

export default Pagination;