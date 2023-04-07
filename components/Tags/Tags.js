import { Stack } from '@chakra-ui/react';
import React from 'react';
import Tag from './Tag';

const Tags = ({
  tags
}) => {
  return (
    <Stack direction='row'>{
        tags.map(tag => 
          <Tag key={tag}>{tag}</Tag>
        )
      }
    </Stack>
  )
}

export default Tags;
