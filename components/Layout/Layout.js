import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'
import { Container } from '@chakra-ui/react'

const Layout = ({
    children
}) => {
  return (
    <Fragment>
        <Navbar />
        <Container maxW='container.xl'>{children}</Container>
    </Fragment>
  )
}

export default Layout