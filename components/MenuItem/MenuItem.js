import React from 'react'
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

const MenuItem = ({
    children,
    isLast,
    to = "/",
    ...rest
}) => {
  return (
    <Link href={to} {...rest}>
        <Text display='block'>{children}</Text>
    </Link>
  )
}

export default MenuItem;
