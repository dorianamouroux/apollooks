# apollooks

An Apollo Client for React leveraging Hooks

```javascript
import React from 'react'
import useQuery from 'apollooks'
import gql from 'graphql-tag'

const QUERY = gql`
  query GetTodo($id: String) {
    todo(id: $id) {
      id
      title
      completed
    }
  }
`

function Todo({ id }) {
  const [data, error] = useQuery(QUERY, { id })
  
  if (error) return 'something went wrong...'
  if (!data) return 'loading...'
  
  return <div>
    <h3>{data.todo.title}</h3>
    <hr />
    <p>
        Completed? {data.todo.completed ? 'yes' : 'no'}
    </p>
  </div>
}
```
