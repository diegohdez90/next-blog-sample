import React from 'react'
import { Box } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

const MenuToggle = ({
    onToggle,
    isOpen
}) => {
  return (
    <Box display={{
        base: 'block',
        md: 'none'
    }}
        onClick={onToggle}
>
        {isOpen ? <CloseIcon />: <HamburgerIcon />}
    </Box>
  )
}

export default MenuToggle;
