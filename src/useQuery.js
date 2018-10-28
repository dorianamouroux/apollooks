import { useState, useEffect } from 'react'
import useClient from './useClient'

export default function useQuery(query, variables) {
  const client = useClient()
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const sub = client.watchQuery({
      query,
      variables
    }).subscribe({
      next: ({ data }) => setData(data),
      error: setError,
    })

    return () => { sub.unsubscribe() }
  }, [query, JSON.stringify(variables)])

  return [data, error]
}
