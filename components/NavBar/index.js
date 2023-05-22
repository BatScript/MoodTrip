import Link from 'next/link'
import React from 'react'
import style from './navbar.module.scss'

const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <Link href={'/'}>
        <h1 className={style.logo}>MoodTrip</h1>
      </Link>
    </div>
  )
}

export default Navbar
