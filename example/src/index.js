import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import App from './App';

import { Router } from "@reach/router"
import { Provider } from '../../dist/apollooks'

const client = new ApolloClient({ uri: 'https://graphql-pokemon.now.sh' });

ReactDOM.render(
  <Provider client={client}>
    <Router>
      <App path="/:pokemonName"/>
    </Router>
  </Provider>,
  document.getElementById("root"));
