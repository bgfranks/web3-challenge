import { useState } from 'react'
import Image from 'next/image'

//images
import Logo from '../public/assets/images/logo.svg'
import HamburgerMenu from '../public/assets/images/icon-menu.svg'
import CloseMenu from '../public/assets/images/icon-menu-close.svg'

export default function Navbar() {
  const [active, setActive] = useState(false)

  return (
    <header className='flex justify-between items-center py-5'>
      <div>
        <Image src={Logo} alt='W' />
      </div>
      <div>
        <Image
          src={active ? CloseMenu : HamburgerMenu}
          alt='nav menu icon'
          onClick={() => setActive(!active)}
        />
      </div>
    </header>
  )
}
