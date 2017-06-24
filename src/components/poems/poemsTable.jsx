import React, { Component } from 'react';
import Table from '../common/tables/table.jsx'

class PoemsTable extends Component {
  constructor() {
    super();

    // Set initial page params state.
    this.state = {
      page: 1,
      perPage: 5,
      sort: 'title',
      poems: [],
      metadata: {
        total_count: 20
      },
      columns: [
        { name: 'title', label: 'Title' },
        { name: 'year', label: 'Year' }
      ]
    }

    // Get the list of poems.
    this.getPoems(this.state.page, this.state.perPage, this.state.sort);
  }

  handlePageClick(page) {

    // Refetch the poems.
    this.getPoems(page, this.state.perPage, this.state.sort);
  }

  handlePageSizeChange(size) {

    // Refetch the poems.
    this.getPoems(1, size, this.state.sort);
  }

  handleHeaderCellClick(column) {

    // Get the current sort.
    const sort = this.state.sort;

    // Is requested column the current column?
    if (sort.indexOf(column) > -1) {

      // Toggle the sort direction.
      column = (sort[0] === '-') ? sort.slice(1, sort.length) : '-' + sort;
    }

    this.getPoems(1, this.state.perPage, column)
  }

  getPoems(page, size, sort) {

    // Build poems URL.
    const url = 'http://localhost:3000/poems?page[number]=' + page + '&page[size]=' + size + '&sort=' + sort;

    // Load poems from the API.
    fetch (url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          page: page,
          perPage: size,
          sort: sort,
          poems: json.data,
          metadata: json.meta
        })

        // Force a render of the table.
        this.forceUpdate();
      })
      .catch((e) => {
        console.log(e);
      })
  }

  render() {

    // Work out the number of pages.
    const pages = Math.ceil(this.state.metadata.total_count / this.state.perPage);

    // Map poems to data.
    const data = this.state.poems.map((poem) => {
      return [
        poem.attributes.title,
        poem.attributes.year
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

export default PoemsTable