import React from 'react';
import { Switch, Route } from 'react-router';

import App from 'components/App';
import Home from 'pages/Home';

export default(
  <App>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </App>
);
