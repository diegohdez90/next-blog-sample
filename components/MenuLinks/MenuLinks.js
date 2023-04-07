import React from 'react'
import { Box, Stack } from '@chakra-ui/react';
import MenuItem from '../MenuItem';

const MenuLinks = ({
    isOpen,
    links
}) => {
  return (
    <Box
        display={{
            base: isOpen ? 'block' : 'none',
            md: 'block'
        }}
        flexBasis={{
            base: '100%',
            md: 'auto'
        }}
    >
        <Stack
            spacing={8}
            align='center'
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
        >
            {links.map(item => (<MenuItem key={item.label} to={item.to}>{item.label}</MenuItem>))}
        </Stack>
    </Box>
  )
}

export default MenuLinks;

