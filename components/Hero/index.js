import React from 'react'
import styles from './hero.module.scss'
import Image from 'next/image'
import Button from '../UI/Button'
import Link from 'next/link'
import { Shantell_Sans } from "next/font/google"
import Navbar from '../NavBar'
const shantell = Shantell_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.textContainer} ${shantell.className}`}>
        <h1>
          Unplanned trips are best until you&apos;re stranded at unknown place.
        </h1>
        <Link href='/addTrip'>
          <Button
            text='Plan Now'
            // width='150px'
            background='#1C6758'
            color='white'
            margin='20px 35px'
          />
        </Link>
      </div>
    </section>
  )
}

export default Hero
