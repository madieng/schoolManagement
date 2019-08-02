import React from "react";

const Pagination = ({ itemPerPage, totalItems, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemPerPage);
  const pages = [...Array(totalPages).keys()];
  return (
    <div>
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="m-auto">
          <ul className="pagination">
            <li
              className={"page-item" + (currentPage === 1 ? " disabled" : "")}
            >
              <button
                className="page-link"
                onClick={() => onPageChange(currentPage - 1)}
              >
                &laquo;
              </button>
            </li>
            {pages.map(page => (
              <li
                key={page}
                className={
                  "page-item" + (currentPage === page + 1 ? " active" : "")
                }
              >
                <button
                  className="page-link"
                  onClick={() => onPageChange(page + 1)}
                >
                  {page + 1}
                </button>
              </li>
            ))}
            <li
              className={
                "page-item" + (currentPage === totalPages ? " disabled" : "")
              }
            >
              <button
                className="page-link"
                onClick={() => onPageChange(currentPage + 1)}
              >
                &raquo;
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Pagination.getDatas = (items, currentPage, itemPerPage) => {
  const start = currentPage - 1;
  return items.slice(start, start + itemPerPage);
};

export default Pagination;
