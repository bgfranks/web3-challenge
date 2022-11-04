import Image from 'next/image'

// images
import RetroPcImg from '../public/assets/images/image-retro-pcs.jpg'
import GamingGrowthImg from '../public/assets/images/image-gaming-growth.jpg'
import TopLaptopsImg from '../public/assets/images/image-top-laptops.jpg'

type Props = {}

export default function Articles({}: Props) {
  return (
    <div className='my-20'>
      <div className='article-card'>
        <Image src={RetroPcImg} alt='Retro PC' className='w-[210px]' />
        <div className=''>
          <h3 className='article-card-number'>01</h3>
          <h4 className='article-card-header'>Reviving Retro PCs</h4>
          <p className='article-card-text'>
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className='article-card'>
        <Image src={TopLaptopsImg} alt='Top Laptops' className='w-[175px]' />
        <div className=''>
          <h3 className='article-card-number'>02</h3>
          <h4 className='article-card-header'>top 10 Laptops of 2022</h4>
          <p className='article-card-text'>
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className='article-card'>
        <Image
          src={GamingGrowthImg}
          alt='Growth of Gaming'
          className='w-[200px]'
        />
        <div>
          <h3 className='article-card-number'>03</h3>
          <h4 className='article-card-header'>The Growth of Gaming</h4>
          <p className='article-card-text'>
            How the pandemic has sparked fresh opprotunities.
          </p>
        </div>
      </div>
    </div>
  )
}
