import Link from 'next/link'

type Props = {
  handleToggleNav: () => void
}

export default function MobileNav({ handleToggleNav }: Props) {
  return (
    <div className='z-2 absolute right-0 w-screen flex top-0 h-screen'>
      <div
        className='bg-black w-[30%] opacity-50'
        onClick={handleToggleNav}
      ></div>
      <div className='bg-off-white w-[70%]'>
        <nav className='flex flex-col justify-start pt-[70%] gap-5 text-2xl pl-10'>
          <Link href='#' className='nav-item'>
            Home
          </Link>
          <Link href='#' className='nav-item'>
            New
          </Link>
          <Link href='#' className='nav-item'>
            Trending
          </Link>
          <Link href='#' className='nav-item'>
            Popular
          </Link>
          <Link href='#' className='nav-item'>
            Categories
          </Link>
        </nav>
      </div>
    </div>
  )
}
