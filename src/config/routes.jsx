import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Route components.
import Home from '../views/home.jsx'
import PoemList from '../views/poems/poemList.jsx'
import AuthorList from '../views/authors/authorList.jsx'

class MainRoute extends Component {
  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route component={MainRoute}>
          <IndexRoute component={Home} />
          <Route path="/poems" component={PoemList} />
          <Route path="/authors" component={AuthorList} />
        </Route>
      </Router>
    )
  }
}

export default Routes