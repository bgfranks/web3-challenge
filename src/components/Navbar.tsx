import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
      <Image
        src={active ? CloseMenu : HamburgerMenu}
        alt='nav menu icon'
        className='z-50'
        onClick={() => setActive(!active)}
      />
      {active && (
        <div className='z-2 absolute right-0 w-screen flex top-0 h-screen overflow-hidden'>
          <div
            className='bg-black w-[30%] opacity-50'
            onClick={() => setActive(!active)}
          ></div>
          <div className='bg-off-white w-[70%]'>
            <nav className='flex flex-col justify-start pt-[70%] gap-5 text-2xl pl-10'>
              <Link href='#'>Home</Link>
              <Link href='#'>New</Link>
              <Link href='#'>Trending</Link>
              <Link href='#'>Popular</Link>
              <Link href='#'>Categories</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
