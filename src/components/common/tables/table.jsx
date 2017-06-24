import React, { Component } from 'react';
import TablePagination from './tablePagination.jsx'
import TableGrid from './tableGrid.jsx'

class Table extends Component {
  render() {
    return (
      <div>
        <TablePagination 
          pages={this.props.pages}
          currentPage={this.props.currentPage}
          pageSizes={this.props.pageSizes}
          defaultPageSize={this.props.defaultPageSize}
          onPageNumberClick={this.props.onPageNumberClick} 
          onPageSizeChange={this.props.onPageSizeChange}
        />
        <TableGrid
          columns={this.props.columns}
          data={this.props.data}
          onHeaderCellClick={this.props.onHeaderCellClick}
        />
      </div>
    )
  }
}

export default Table