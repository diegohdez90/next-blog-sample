import Markdown from 'react-markdown';
import RemarkGfm from 'remark-gfm';
import React from 'react';
import classes from './../../../styles/bulma.module.sass';
import { Box, FormControl, FormLabel, Image, Input, Stack, Textarea } from '@chakra-ui/react';
import Tags from '../../Tags';
import { useRef } from 'react';

const Detail = (props) => {
  const { post } = props;
  const {
    imageURL,
    content,
    date,
    tags,
    publisher: [creator]
  } = post;

  const fullNameRef = useRef();
  const emailRef = useRef();
  const commentsRef = useRef();

  const onFormatData = (e) => {
    e.preventDefault();
    const { value: fullName } = fullNameRef.current;
    const { value: email } = emailRef.current;
    const { value: comments } = commentsRef.current;

    props.onSubmit(fullName, email, comments);
  }

  return (
    <div className={classes.content}>
      <Box boxSize='xl'>
        <Image boxSize='100%' objectFit='fill' src={imageURL} />
      </Box>
      <p>Published by: {creator.nickname}</p>
      <p>Created at: {date}</p>
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
      <form onSubmit={onFormatData}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel>Full name</FormLabel>
            <Input placeholder='Your name' ref={fullNameRef}></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Email Address' ref={emailRef}></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Comments</FormLabel>
            <Textarea placeholder='Write here your comments' ref={commentsRef}></Textarea>
          </FormControl>
          <FormControl>
            <Input backgroundColor='green.400' color='whiteAlpha.900' type='submit'value='Send comments' />
          </FormControl>
        </Stack>
      </form>
    </div>
  )
}

export default Detail;