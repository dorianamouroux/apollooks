import React, { useContext } from 'react'

import { ApollooksContext } from './Context'

console.log(React)

export default function useClient() {
  return useContext(ApollooksContext)
}
