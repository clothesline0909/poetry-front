import React, { Component } from 'react';

class TablePaginationPageNumber extends React.Component {
  render() {

    // Work out classnames.
    const currentClass = this.props.current ? 'current' : '';
    const classNames = `${currentClass} page`;

    return (
      <li className={classNames} onClick={() => this.props.onPageNumberClick(this.props.page)}>Page {this.props.page}</li>
    )
  }
}

export default TablePaginationPageNumber