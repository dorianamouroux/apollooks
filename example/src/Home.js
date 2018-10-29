import React from 'react';
import gql from 'graphql-tag'

import { useQuery } from '../../dist/apollooks'

const QUERY = gql`
  query Channels {
    channels {
      id
      name
    }
  }
`

function Home({ navigate }) {
  const [data, error] = useQuery(QUERY)

  if (error) return <pre>{error.toString()}</pre>
  if (!data) return 'Loading...'

  if (data.channels.length > 0) {
    navigate(`/channel/${data.channels[0].id}`)
    return null
  }

  return <div>
    no channel, create one
  </div>
}

export default Home;
