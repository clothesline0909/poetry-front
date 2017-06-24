import React, { Component } from 'react';
import TablePaginationPageSize from './tablePaginationPageSize.jsx'
import TablePaginationPageNumber from './tablePaginationPageNumber.jsx'

class TablePagination extends React.Component {
  render() {

    // Build an array of pages.
    const pages = [];
    for (let page = 1; page < this.props.pages + 1; page++) {

      // Is this the current page?
      const current = this.props.currentPage === page;

      pages.push(
        <TablePaginationPageNumber
          key={page}
          page={page}
          current={current}
          onPageNumberClick={this.props.onPageNumberClick}
        />
      );
    }

    return(
      <div>
        <TablePaginationPageSize 
          pageSizes={this.props.pageSizes}
          defaultPageSize={this.props.defaultPageSize}
          onPageSizeChange={this.props.onPageSizeChange}
        />
        <ul className="pagination">{pages}</ul>
      </div>
    )
  }
}

export default TablePagination