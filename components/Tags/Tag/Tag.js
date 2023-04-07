import { Badge } from '@chakra-ui/react'
import React from 'react'

const Tag = ({
    children
}) => {
  return (
    <Badge bgColor='primary.400'>{children}</Badge>
  )
}

export default Tag;
