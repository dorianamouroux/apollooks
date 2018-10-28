import React from 'react';
import gql from 'graphql-tag'
import { Link } from "@reach/router"

import { useQuery } from '../../dist/apollooks'

const QUERY = gql`
  query GetOnePokemon($name: String){
    pokemon(name: $name) {
      id
      number
      name
      attacks {
        special {
          name
          type
          damage
        }
      }
    }
  }
`

function App({ pokemonName }) {
  const [data, error] = useQuery(QUERY, {
    name: pokemonName
  })

  return <div>
    <Link to="/Pikachu">Pikachu</Link>
    <Link to="/Charmander">Charmander</Link>
    data =<br />
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
    error =<br />
    <pre>
      {JSON.stringify(error, null, 2)}
    </pre>
  </div>
}

export default App;
