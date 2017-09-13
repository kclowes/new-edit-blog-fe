import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';

import TodoPage from '../containers/TodoPage';
import '../assets/stylesheets/App.scss';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={TodoPage} />
      </div>
    );
  }
}

export default withRouter(App);
