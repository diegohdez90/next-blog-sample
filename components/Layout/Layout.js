import React, { Fragment, useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import { Container } from '@chakra-ui/react'
import NotificationContext from '../../store/notification';
import Notification from '../Notification';

const Layout = ({
    children
}) => {

  const context = useContext(NotificationContext);
  const active = context.notification;

  return (
    <Fragment>
        <Navbar />
        <Container maxW='container.xl'>
          {children}
          {active && <Notification notification={active} />}        
        </Container>
    </Fragment>
  )
}

export default Layout