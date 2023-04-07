import { Badge, Button, ButtonGroup, Card, CardBody, CardFooter, GridItem, Heading, Link, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it';
import { useRouter } from 'next/router';

const ListItem = (props) => {
  const md = new MarkdownIt();
  const { post } = props;
  const {
    _id,
    imageURL,
    content,
    date,
    tags,
    publisher: [creator]
  } = post;

  const [title, setTitle] = useState('');
  const [contentPost, setContentPost] = useState('');

  useEffect(() => {

    const postParsed = md.parse(content)
    const [ firstTag, postTitle, ...restOfContent ] = postParsed;
    const [, , firstParagraph] = restOfContent;
    
    if (firstTag.type === 'heading_open') {
      setTitle(postTitle.content);
      setContentPost(firstParagraph.content)
    }
  },)


  const { push } = useRouter()

  return (
    <Fragment>
        <GridItem
            w='1oo%'
        >
            <Card>
                <CardBody>
                    <Image src={imageURL}width='100' height='100' />
                    <Stack mt={6} spacing={4}>
                        <Heading as='h4'>{title}</Heading>
                        <Text>{creator.nickname}</Text>
                        <p>{date}</p>
                        <Stack
                            direction='row'
                        >{tags.split(",").map(tag => (<Badge key={tag} colorScheme='red.300'>{tag}</Badge>))}</Stack>
                        <Text as='p'>{contentPost}</Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing={2}>
                        <Button
                            backgroundColor='blue.400'
                            color='white'
                            onClick={() => {
                                push(`/posts/${_id}`);
                            }}
                        >Open Entry</Button>
                        <Link as={Button} backgroundColor='blue.400' color='white'>See Author</Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </GridItem>
    </Fragment>
  )
}

export default ListItem;
