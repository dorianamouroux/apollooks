import React from 'react';
import gql from 'graphql-tag'

import { useQuery } from '../../dist/apollooks'

const QUERY = gql`
  query ChannelDetail($id: ID!) {
    channel(id: $id) {
      id
      name

      messages {
        id
        text
      }
    }
  }
`

function Channel({ id }) {
  const [data, error] = useQuery(QUERY, { id })

  if (error) return <pre>{error.toString()}</pre>
  if (!data) return 'Loading...'

  console.log(data)

  return <div>
    <h1>{data.channel.name}</h1>
    {data.channel.messages.map((m) => (
      <React.Fragment key={m.id}>
        <p>{m.text}</p>
        <hr />
      </React.Fragment>
    ))}
  </div>
}

export default Channel;
