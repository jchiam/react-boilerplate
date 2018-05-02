/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension, react/no-children-prop */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import store from 'store';
import routes from 'routes';

import 'styles/stylesheet.scss';

// check environment
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction || !!module.hot) {
  ReactDOM.render(
    <Provider store={store}>
      <Router children={routes} history={createBrowserHistory()} />
    </Provider>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router children={routes} history={createBrowserHistory()} key={Math.random()} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
  module.hot.accept();
}
