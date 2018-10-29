import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { Router } from "@reach/router"
import { Provider } from '../../dist/apollooks'

import Home from './Home';
import Channel from './Channel';

const client = new ApolloClient({ uri: 'https://apollooks-server.now.sh/graphql' });

ReactDOM.render(
  <Provider client={client}>
    <Router>
      <Channel path="/channel/:id"/>
      <Home path="/"/>
    </Router>
  </Provider>,
  document.getElementById("root"));
