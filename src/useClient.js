import { useContext } from 'react'

import { HooksApolloContext } from './Context'

export default function useClient() {
  return useContext(HooksApolloContext)
}
