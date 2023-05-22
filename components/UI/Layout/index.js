'use client'

import styles from './layout.module.scss'
import Footer from '../../Footer'
import Navbar from '../../NavBar'
import { motion } from 'framer-motion'

const Layout = ({ children }) => {
  return (
    <motion.div
      className={styles.layoutWrap}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      {children}
      <Footer />
    </motion.div>
  )
}

export default Layout
