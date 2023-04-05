import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, GridItem } from '@chakra-ui/react';
import Image from 'next/image';
import React, { Fragment } from 'react'

const ListItem = (props) => {
  return (
    <Fragment>
        <GridItem
            w='1oo%'
        >
            <Card>
                <CardHeader>
                    <Image src='#'/>
                </CardHeader>
                <CardBody>
                    <h3>title</h3>
                    <p>Author</p>
                    <p>Date</p>
                    <div>#Tags</div>
                    <p>The post content</p>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing={2}>
                        <Button>Open Entry</Button>
                        <Button>See Author</Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </GridItem>
    </Fragment>
  )
}

export default ListItem;
