import Link from 'next/link'

export default function DesktopNav() {
  return (
    <div className='hidden md:flex md:gap-5'>
      <Link href='#' className='nav-item text-blue-gray-700'>
        Home
      </Link>
      <Link href='#' className='nav-item text-blue-gray-700'>
        New
      </Link>
      <Link href='#' className='nav-item text-blue-gray-700'>
        Trending
      </Link>
      <Link href='#' className='nav-item text-blue-gray-700'>
        Popular
      </Link>
      <Link href='#' className='nav-item text-blue-gray-700'>
        Categories
      </Link>
    </div>
  )
}
