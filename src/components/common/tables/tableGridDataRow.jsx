import React, { Component } from 'react';

class TableGridDataRow extends Component {
  render() {

    // Build the table cells.
    const cells = this.props.data.map((datum) => {
      return (
        <td key={datum}>{datum}</td>
      )
    });

    return (
      <tr>{cells}</tr>
    )
  }
}

export default TableGridDataRow