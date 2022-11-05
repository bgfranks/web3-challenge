import Image from 'next/image'

// components
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

//images
import Logo from '../../public/assets/images/logo.svg'
import HamburgerMenu from '../../public/assets/images/icon-menu.svg'
import CloseMenu from '../../public/assets/images/icon-menu-close.svg'

// props typing
type Props = {
  handleToggleNav: () => void
  isActive: boolean
}

export default function Navbar({ handleToggleNav, isActive }: Props) {
  return (
    <header className='flex justify-between items-center py-5'>
      <div>
        <Image src={Logo} alt='W' />
      </div>
      <DesktopNav />
      <Image
        src={isActive ? CloseMenu : HamburgerMenu}
        alt='nav menu icon'
        className='z-50 md:hidden'
        onClick={handleToggleNav}
      />
      {isActive && <MobileNav handleToggleNav={handleToggleNav} />}
    </header>
  )
}
