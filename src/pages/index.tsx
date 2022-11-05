import Head from 'next/head'
import { useState } from 'react'

// components
import CTA from '../components/CTA'
import Navbar from '../components/Nav/Navbar'
import NewSection from '../components/NewSection'
import Articles from '../components/Articles'

export default function Home() {
  const [isActive, setIsActive] = useState(false)

  const handleToggleNav = () => {
    setIsActive(!isActive)
    if (!isActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <div className='px-5 md:px-10 lg:px-20 xl:px-30'>
      <Head>
        <title>Web3</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar handleToggleNav={handleToggleNav} isActive={isActive} />
      <main>
        <CTA />
        <NewSection />
        <Articles />
      </main>
    </div>
  )
}
