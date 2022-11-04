import Image from 'next/image'

// images
import CtaMobileImage from '../public/assets/images/image-web-3-mobile.jpg'
import CtaDesktopImage from '../public/assets/images/image-web-3-desktop.jpg'

export default function CTA() {
  return (
    <div>
      <div>
        <Image src={CtaMobileImage} alt='Call to Action Image' />
      </div>
      <div className=''>
        <h1 className='text-4xl font-bold py-5 w-[70%]'>
          The Bright Future of Web 3.0?
        </h1>
        <p className='text-blue-gray-700 leading-6'>
          We can dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promises?
        </p>
        <button className='my-5 bg-soft-red text-off-white font-bold text-sm px-8 py-3 tracking-[.3rem]'>
          READ MORE
        </button>
      </div>
    </div>
  )
}
