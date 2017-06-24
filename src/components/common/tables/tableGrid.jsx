import React, { Component } from 'react';
import TableGridHeaderRow from './tableGridHeaderRow.jsx'
import TableGridDataRow from './tableGridDataRow.jsx'

class TableGrid extends Component {
  render() {

    // Build the table rows.
    const rows = this.props.data.map((row) => {
      return(
        <TableGridDataRow
          data={row}
        />
      )
    });

    return (
      <table>
        <tbody>
          <TableGridHeaderRow
            columns={this.props.columns}
            onHeaderCellClick={this.props.onHeaderCellClick} 
          />
          {rows}
        </tbody>
      </table>
    )
  }
}

export default TableGrid