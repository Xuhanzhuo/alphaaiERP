// src/components/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination">
            <button 
                disabled={currentPage === 1} 
                onClick={() => onPageChange(currentPage - 1)}
            >
                &lt;
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button 
                disabled={currentPage === totalPages} 
                onClick={() => onPageChange(currentPage + 1)}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
