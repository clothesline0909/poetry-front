import React, { Component } from 'react';
import Table from '../common/tables/table.jsx'

class AuthorsTable extends Component {
  constructor() {
    super();

    // Set initial page params state.
    this.state = {
      page: 1,
      perPage: 5,
      sort: 'name',
      authors: [],
      metadata: {
        total_count: 20
      },
      columns: [
        { name: 'name', label: 'Name' }
      ]
    }

    // Get the list of authors.
    this.getAuthors(this.state.page, this.state.perPage, this.state.sort);
  }

  handlePageClick(page) {

    // Refetch the authors.
    this.getAuthors(page, this.state.perPage, this.state.sort);
  }

  handlePageSizeChange(size) {

    // Refetch the authors.
    this.getAuthors(1, size, this.state.sort);
  }

  handleHeaderCellClick(column) {

    // Get the current sort.
    const sort = this.state.sort;

    // Is requested column the current column?
    if (sort.indexOf(column) > -1) {

      // Toggle the sort direction.
      column = (sort[0] === '-') ? sort.slice(1, sort.length) : '-' + sort;
    }

    this.getAuthors(1, this.state.perPage, column)
  }

  getAuthors(page, size, sort) {

    // Build authors URL.
    const url = 'http://localhost:3000/authors?page[number]=' + page + '&page[size]=' + size + '&sort=' + sort;

    // Load authors from the API.
    fetch (url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          page: page,
          perPage: size,
          sort: sort,
          authors: json.data,
          metadata: json.meta
        })
      })
      .catch((e) => {
        console.log(e);
      })
  }

  render() {

    // Work out the number of pages.
    const pages = Math.ceil(this.state.metadata.total_count / this.state.perPage);

    // Map authors to data.
    const data = this.state.authors.map((poem) => {
      return [
        poem.attributes.name
      ]
    })

    return (
      <div>
        <h1>Poems</h1>
        <Table 
          columns={this.state.columns}
          data={data}
          pages={pages}
          currentPage={this.state.page}
          pageSizes={[3, 5, 10, 20]}
          defaultPageSize={5}
          onPageNumberClick={this.handlePageClick.bind(this)} 
          onPageSizeChange={this.handlePageSizeChange.bind(this)}
          onHeaderCellClick={this.handleHeaderCellClick.bind(this)}
        />
      </div>
    )
  }
}

export default AuthorsTable