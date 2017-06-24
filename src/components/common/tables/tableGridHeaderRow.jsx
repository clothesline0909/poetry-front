import React, { Component } from 'react';

class TableGridHeaderRow extends Component {
  render() {

    // Build the header cells.
    const cells = this.props.columns.map((column) => {
      return (
        <th key={column.name} onClick={() => this.props.onHeaderCellClick(column.name)}>{column.label}</th>
      )
    });

    return (
      <tr>{cells}</tr>
    )
  }
}

export default TableGridHeaderRow