
import React from 'react'

const Site = ({ children }: any) => (
  <main role="main">
    {children}
  </main>
)

export default React.memo(Site)
