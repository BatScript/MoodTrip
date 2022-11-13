import React from 'react';
import style from './navbar.module.scss';

const Navbar = () => {
  return (
      <div className={style.navbarContainer}>
        <h1 className={style.logo}>MoodTrip</h1>
      </div>
  )
}

export default Navbar