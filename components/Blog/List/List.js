import { Grid } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import ListItem from '../ListItem'

const List = ({
    featured = false,
    posts
}) => {
  return (
    <Fragment>
        <h2>{featured && 'Featured' } Posts</h2>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {posts.map((post, index) => <ListItem key={index} post={post} />)}
        </Grid>
    </Fragment>
  )
}

export default List