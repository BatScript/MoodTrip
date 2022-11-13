import React from 'react';
import styles from './button.module.scss'

const Button = ({ text, onClick, width, background, color, margin }) => {

  const propStyles = {
    width,
    background,
    color,
    margin
  }

  // const onClickTrigger = (data) => {
    
  // }

  return (
      <div className={`${styles.common}`} style={propStyles} onClick={onClick} >{text}</div>
  )
}

export default Button