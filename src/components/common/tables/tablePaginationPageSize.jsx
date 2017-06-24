import React, { Component } from 'react';

class TablePaginationPageSize extends Component {
  render() {

    // Build select options.
    const options = this.props.pageSizes.map((pageSize) => {

      // Is the page size selected?
      const selected = pageSize === this.props.defaultPageSize

      return (
        <option selected={selected}>{pageSize}</option>
      )
    });

    return (
      <select onChange={(e) => this.props.onPageSizeChange(e.target.value)}>
        {options}
      </select>
    )
  }
}

export default TablePaginationPageSize