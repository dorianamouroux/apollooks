import React, { useContext } from 'react'

import { ApollooksContext } from './Context'

export default function useClient() {
  return useContext(ApollooksContext)
}
