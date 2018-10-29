import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { useRouter } from "@reach/router/unstable-hooks";
import { Provider } from '../../dist/apollooks'

import Home from './Home';
import Channel from './Channel';

const client = new ApolloClient({ uri: 'https://apollooks-server.now.sh/graphql' });

function App() {
  const route = useRouter({
    ".": ({ navigate }) => <Home navigate={navigate} />,
    "/channel/:id": ({ id }) => <Channel id={id}/>
  });

  return <Provider client={client}>
    {route}
  </Provider>
}

ReactDOM.render(<App />, document.getElementById("root"));
