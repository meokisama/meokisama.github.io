import React from "react";

function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="blog-pagination text-center">
      <ul>
        {currentPage === 1 ? null : (
          <li>
            <a onClick={(e) => paginate(e, currentPage - 1)} href="!#">
              <i className="icon-arrow-left"></i>
            </a>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={currentPage === number ? "is-active" : null}
          >
            <a onClick={(e) => paginate(e, number)} href="!#">
              {number}
            </a>
          </li>
        ))}
        {currentPage === pageNumbers[pageNumbers.length - 1] ? null : (
          <li>
            <a onClick={(e) => paginate(e, currentPage + 1)} href="!#">
              <i className="icon-arrow-right"></i>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
