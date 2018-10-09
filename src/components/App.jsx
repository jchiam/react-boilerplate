import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>{children}</div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

App.defaultProps = {
  children: null
};
