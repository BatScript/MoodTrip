import React from 'react';
import styles from './modal.module.scss';

const Modal = ({title, subTitle}) => {
  return (
        <div>
          <div className={styles.backdrop}></div>
          <div className={styles.modalContainer}>
              <h1>{title}</h1>
              <p>{subTitle}</p>
          </div>
        </div>
  )
}

export default Modal