import React, { Component, Props } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
