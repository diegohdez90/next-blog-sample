import { Card, CardBody, CardHeader, GridItem, Image } from '@chakra-ui/react';
import React, { Fragment } from 'react';

const ListItem = () => {
  return (
    <Fragment>
        <GridItem
            w='1oo%'
        >
            <Card>
                <CardHeader>
                    <Image />
                </CardHeader>
                <CardBody>
                    <h3>User name</h3>
                    <p>Entries published</p>
                </CardBody>
            </Card>
        </GridItem>
    </Fragment>
  )
}

export default ListItem;
