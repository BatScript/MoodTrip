import Image from 'next/legacy/image'
import Feature from '../../components/FeatureCard'
import Hero from '../../components/Hero'
import { features } from '../../constant'

const HomePage = () => {
  return (
    <>
      <Image
        src={'https://i.ibb.co/MBby94R/5685020.png'}
        layout='fill'
        objectFit='cover'
        alt='hero'
        placeholder='blur'
        blurDataURL='/images/heroBG.jpg'
      />
      <Hero />
      <Feature data={features} />
    </>
  )
}

export default HomePage
