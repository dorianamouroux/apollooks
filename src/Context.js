import React from 'react'
import PropTypes from 'prop-types'

export const ApollooksContext = React.createContext(null);

export default function ApollooksProvider({ client, children }) {
  const { Provider } = ApollooksContext
  return (
    <ApollooksContext.Provider value={client}>
      {children}
    </ApollooksContext.Provider>
  )
}

ApollooksProvider.propTypes = {
  client: PropTypes.object.isRequired,
  children: PropTypes.any
}
