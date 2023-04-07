import Markdown from 'react-markdown';
import RemarkGfm from 'remark-gfm';
import React from 'react';
import classes from './../../../styles/bulma.module.sass';
import { Box, Image } from '@chakra-ui/react';
import Tags from '../../Tags';

const Detail = (props) => {
  const { post } = props;
  const {
    _id,
    imageURL,
    content,
    date,
    tags,
    publisher: [creator]
  } = post;

  console.log(content)

  return (
    <div className={classes.content}>
      <Box boxSize='xl'>
        <Image boxSize='100%' objectFit='fill' src={imageURL} />
      </Box>
      <p>Published by: {creator.nickname}</p>
      <p>Created at: {creator.date}</p>
      <Tags tags={tags.split(',').map(tag => tag.trim())} />
      <Markdown
        remarkPlugins={[RemarkGfm]}
        components={{
          h1: (props) => <h1 className={classes.title}  {...props} />,
          table: (props) => <table className={`${classes.table} ${classes['is-striped']}}`} {...props} />,
        }}
      >
          {content}
      </Markdown>
    </div>
  )
}

export default Detail;