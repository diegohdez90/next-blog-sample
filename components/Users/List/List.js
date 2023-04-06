import { Grid } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import ListItem from '../ListItem';

const List = ({
    users
}) => {
  return (
    <Fragment>
       <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {users.map((user, index) => <ListItem key={index} user={user} />)}
        </Grid>
    </Fragment>
  )
}

export default List;
