import React from 'react';
import styles from './button.module.scss'

const Button = ({ text, onClickFunction, width, background, color, margin }) => {
  const propStyles = {
    width,
    background,
    color,
    margin
  }
  return (
      <div className={`${styles.common}`} style={propStyles} onClick={onClickFunction} >{text}</div>
  )
}

export default Button