import Link from 'next/link'

export default function DesktopNav() {
  return (
    <div className='hidden md:flex md:gap-5'>
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
    </div>
  )
}
