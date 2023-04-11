
import React, { useState } from 'react'
import Navigation from '../Navigation'
import NavbarLogo from '../NavbarLogo';
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
                    label: 'Home', to: '/', session: true
                }, {
                    label: 'Posts', to: '/posts', session: false,
                }, {
                    label: 'Writers', to: '/users', session: false
                }, {
                    label: 'Settings',
                    children: [{
                        label: 'Login',
                        to: '/login',
                        session: false,
                    }, {
                        label: 'Profile',
                        to: '/profile',
                        session: true,
                    }, {
                        label: 'Logout',
                        to: '#',
                        session: true,
                    }]
                }
            ]} 
        />
    </Navigation>
  )
}

export default Navbar;
