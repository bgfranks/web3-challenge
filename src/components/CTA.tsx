import Image from 'next/image'

// images
import CtaMobileImage from '../public/assets/images/image-web-3-mobile.jpg'
import CtaDesktopImage from '../public/assets/images/image-web-3-desktop.jpg'

export default function CTA() {
  return (
    <div className='mt-5 mb-10 lg:row-end-2 lg:col-span-2 lg:m-0'>
      <div>
        <Image
          src={CtaMobileImage}
          alt='Call to Action Image'
          className='md:hidden'
        />
        <Image
          src={CtaDesktopImage}
          alt='Call to Action Image'
          className='hidden md:block'
        />
      </div>
      <div className='lg:flex items-center gap-20'>
        <h1 className='text-5xl font-bold py-5 lg:text-6xl'>
          The Bright Future of Web 3.0?
        </h1>
        <div className='lg:ml-5'>
          <p className='text-blue-gray-700 leading-6 lg:pb-10 lg:pr-5 '>
            We can dive into the next evolution of the web that claims to put
            the power of the platforms back into the hands of the people. But is
            it really fulfilling its promises?
          </p>
          <button className='my-5 bg-soft-red text-off-white font-bold text-sm px-8 py-3 tracking-[.3rem] hover:bg-blue-gray-900 transition-durration lg:m-0'>
            READ MORE
          </button>
        </div>
      </div>
    </div>
  )
}
