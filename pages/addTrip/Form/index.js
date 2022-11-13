import React, { useState, useEffect } from 'react'
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input'
import styles from './form.module.scss'
import Head from 'next/head';
import Script from 'next/script';

const Form = () => {
  const [searchQuery, setSeacrchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedData, setSelectedData] = useState("");

  const getValue = (data) => {
    setSeacrchQuery(data);
    setSelectedData(data);
  }

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetch('https://api.tomtom.com/search/2/search/' + searchQuery + '.json?key=Njiq5vcXD9JthLMnyvBGGdTBzDAxt2AY&typeahead=true&limit=4&countrySet=IN')
      .then((response) => response.json())
      .then((data) => setSuggestions(data.results))
    }
  }, [searchQuery])


  const processLocation = () => {
    console.log("added", selectedData);
  }

  return (
    <div>
      <Head>
      <link rel='stylesheet' type='text/css' href='https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.5.0/maps/maps.css' />
      </Head>
      <Script src="https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.5.0/maps/maps-web.min.js"></Script>
      <div className={styles.form}>
        <Input type='autoComplete' width='100%' getValue={getValue} listData={suggestions} />
        <Button text='Add' background='#1C6758' color='white' margin='10px' onClick={processLocation} />
      </div>
    </div>
  )
}

export default Form;