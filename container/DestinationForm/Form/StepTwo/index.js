import React from 'react'
import styles from './stepTwo.module.scss'

const StepTwo = () => {
  return (
    <div className='d-flex align-center justify-center'>
      <div id='map-div' className={styles.mapContainer}></div>
      <div>
        <h1>Hello world</h1>
      </div>
    </div>
  )
}

export default StepTwo
