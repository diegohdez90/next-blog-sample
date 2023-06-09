import { Box, Container, Grid, Heading, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import ListItem from '../ListItem'

const List = ({
    featured = false,
    posts
}) => {
  return (
    <Fragment>
        <Heading as='h2'><Text align='center'>{featured && 'Featured' } Posts</Text></Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            {posts.map((post, index) => <ListItem key={post._id} post={post} />)}
        </Grid>
    </Fragment>
  )
}

export default List;
