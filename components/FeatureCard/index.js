import React from 'react'
import Image from 'next/image'
import styles from './feat.module.scss'

const Feature = ({ data }) => {
  return (
    <section className={styles.featureContainer}>
      {data.map((data, index) => {
        return (
          <div key={index} className={styles.feature}>
            <Image src={data.src} width={100} height={100} alt='icon' />
            <span>{data.title}</span>
          </div>
        )
      })}
    </section>
  )
}

export default Feature
