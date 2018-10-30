import { useCallback } from 'react'
import useClient from './useClient'

export default function useMutation(mutation, variables) {
  const client = useClient()
  const mutate = useCallback(() => {
    return client.mutate({
      mutation,
      variables,
    })
  }, [mutation, JSON.stringify(variables)])

  return mutate
}
