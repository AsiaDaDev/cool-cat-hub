import * as React from 'react'
import Nav from "./nav"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Nav></Nav>
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout