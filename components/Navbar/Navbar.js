
import React, { useState } from 'react'
import Navigation from '../Navigation'
import NavbarLogo from '../NavBarLogo/NavbarLogo'
import MenuToggle from '../MenuToggle'
import MenuLinks from '../MenuLinks'

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);
  return (
    <Navigation {...props}>
        <NavbarLogo />
        <MenuToggle onToggle={onToggle} />
        <MenuLinks
            isOpen={isOpen}
            links={[{
                    label: 'Home', to: '/'
                }, {
                    label: 'Posts', to: '/posts'
                }, {
                    label: 'Writers', to: '/users'

                }
            ]} 
        />
    </Navigation>
  )
}

export default Navbar;
