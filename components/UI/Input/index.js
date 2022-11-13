import React, { useState, useEffect } from 'react'
import styles from './input.module.scss'

const Input = ({ type, width, getValue, listData }) => {
    const [showList, setShowList] = useState(false);
    const [val, setVal] = useState('');

    useEffect(() => {
        listVisibilityHandler()
    },[val])

    const customStyles = {
        width
    }

    const onChangeHandler = (e) => {
        var inpulVal = e.target.value;
        setVal(inpulVal);
        getValue(inpulVal)
    }

    const listVisibilityHandler = () => {
        if (val.length > 0) {
            setShowList(true);
        }
        else {
            setShowList(false);
        }
    }

    const locationClickHandler = (index) => {
        setVal(listData[index].address.freeformAddress);
        getValue(listData[index])
        setTimeout(() => {
            setShowList(false);
        },100)
    }

  return (
      <div className={styles.inputContainer}>
          <input type={type} style={customStyles} value={val} onChange={onChangeHandler} />
          {(type === 'autoComplete' && showList && listData) && (
              <ul className={styles.suggestions}>
                  {listData.map((data, index) => {
                      return (
                          <li key={index} onClick={() => locationClickHandler(index)}>
                            <img src='images/location_list.svg' alt='location_logo' />
                            <p>{data.address.freeformAddress}</p>
                          </li>
                      )
                  })}
              </ul>
          )}
    </div>
  )
}

export default Input