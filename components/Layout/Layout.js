import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = ({
    children
}) => {
  return (
    <Fragment>
        <Navbar />
        <main>{children}</main>
    </Fragment>
  )
}

export default Layout