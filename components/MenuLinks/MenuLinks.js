import React from 'react'
import { useSession } from 'next-auth/react';
import { Box, Menu, MenuButton, MenuList, Stack } from '@chakra-ui/react';
import MenuItem from '../MenuItem';

const MenuLinks = ({
    isOpen,
    links
}) => {
  const { data, status } = useSession();

  console.log('status');
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
            {links.map(item => {
                if (!('children' in item))
                    return item.session && status === 'authenticated' ? (<MenuItem
                        key={item.label}
                        to={item.to}
                    >{item.label}</MenuItem>) : (!item.session && <MenuItem
                        key={item.label}
                        to={item.to}
                    >{item.label}</MenuItem>);
                return (
                <Menu key={item.label}>
                    <MenuButton >{item.label}</MenuButton>
                    <MenuList backgroundColor='gray.600'>
                        <Stack spacing={3} paddingStart={4}>
                            {item.children.map(child => {
                                return status === 'authenticated' && child.session ? (
                                    ('to' in child ? <MenuItem key={child.label} to={child.to}>{child.label}</MenuItem> : (<MenuItem key={child.label} onClick={child.onClick}>{child.label}</MenuItem>))
                                ) : child.to && status !== 'authenticated'  && !child.session && <MenuItem key={child.label} to={child.to}>{child.label}</MenuItem>
                            })}
                        </Stack>
                    </MenuList>
                </Menu>)
            })}
        </Stack>
    </Box>
  )
}

export default MenuLinks;

