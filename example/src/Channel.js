import React, { useState } from 'react';
import gql from 'graphql-tag'

import { useQuery, useMutation } from '../../dist/apollooks'

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

const MUTATION = gql`
  mutation SendMessage($channelId: ID!, $text: String!) {
    addMessage(message: { channelId: $channelId, text: $text }) {
      id
      text
    }
  }
`
function Channel({ id }) {
  const [inputData, setData] = useInput('')
  const [data, error] = useQuery(QUERY, { id })
  const sendMessage = useMutation(MUTATION, {
    channelId: id,
    text: inputData.value
  })

  if (error) return <pre>{error.toString()}</pre>
  if (!data) return 'Loading...'

  return <div>
    <h1>{data.channel.name}</h1>
    <input {...inputData} />
    <button onClick={() => sendMessage().then(() => setData(''))}>
      Send message
    </button>
    {data.channel.messages.reverse().map((m, i) => (
      <React.Fragment key={m.id}>
        <p>{m.text}</p>
        <hr />
      </React.Fragment>
    ))}
  </div>
}

function useInput(defaultValue) {
  const [data, setData] = useState('')

  return [{
    value: data,
    onChange(event) {
      setData(event.target.value)
    },
  }, setData]
}

export default Channel;
