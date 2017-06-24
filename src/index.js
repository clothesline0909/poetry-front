import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/routes.jsx'
import './index.css';

class App extends React.Component {
  render() {
    return (
      <Routes />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);