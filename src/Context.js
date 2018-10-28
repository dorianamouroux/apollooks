import React from 'react'
import PropTypes from 'prop-types'

export const HooksApolloContext = React.createContext(null);

export default function HooksApolloProvider({ client, children }) {
  return (
    <HooksApolloContext.Provider value={client}>
      {children}
    </HooksApolloContext.Provider>
  )
}

HooksApolloProvider.propTypes = {
  client: PropTypes.object.isRequired,
  children: PropTypes.any
}
