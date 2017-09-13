import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

App.propTypes = {
  dispatch: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    items: state.items.list,
  };
}

export default withRouter(connect(mapStateToProps)(App));
