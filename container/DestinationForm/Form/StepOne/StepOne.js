import React from 'react'
import Input from '../../../../components/UI/Input'
import Button from '../../../../components/UI/Button'
import styles from './stepOne.module.scss'
import Image from 'next/legacy/image'

const StepOne = ({ getValue, listData, buttonClick }) => {
  return (
    <div className='d-flex'>
      <div className='p-rel w-half'>
        <Image
          src={
            'https://i.ibb.co/mTbN9FN/HD-wallpaper-studio-ghibli-upscaled-arrietty-r-ghibli-winter.jpg'
          }
          alt='arietty'
          layout='fill'
          objectFit='cover'
          width={50}
          height={100}
        />
      </div>
      <div className={styles.form}>
        <h1>Enter your Destination</h1>
        <Input
          type='autoComplete'
          width='100%'
          getValue={getValue}
          listData={listData}
        />
        <Button
          text='Add'
          background='#1C6758'
          color='white'
          margin='10px'
          onClick={buttonClick}
        />
      </div>
    </div>
  )
}

export default StepOne
