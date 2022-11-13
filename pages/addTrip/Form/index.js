import React, { useState, useEffect } from 'react'
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input'
import styles from './form.module.scss';
import Script from 'next/script';
import Loader from '../../../components/UI/Loader';
import Modal from '../../../components/UI/Modal';

const Form = () => {
  const [searchQuery, setSeacrchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedData, setSelectedData] = useState("");
  const [mapScriptLoaded, setMapScriptLoaded] = useState(false);
  const [formStep, setFormStep] = useState(1);

  console.log(mapScriptLoaded);

  const triggerMapLoad = (coordinates) => {
    const API_KEY = 'A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR';
    const APPLICATION_NAME = 'My Application';
    const APPLICATION_VERSION = '1.0';
    
    tt.setProductInfo(APPLICATION_NAME, APPLICATION_VERSION);

    const LOCATION = {lng: coordinates.lon, lat: coordinates.lat};
  
    var map = tt.map({
      key: API_KEY,
      container: 'map-div',
      center: LOCATION,
      zoom: 12
    });
  }

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

  useEffect(() => {
    if (formStep === 2) {
      triggerMapLoad(selectedData.position);
    }
  }, [formStep, selectedData.position])


  const processLocation = async () => {
    console.log("added", selectedData);
    if (mapScriptLoaded) {
      setFormStep(2);      
    }
  }

  return (
    <div>
      <Script strategy='afterInteractive' src="https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.5.0/maps/maps-web.min.js" onLoad={() => setMapScriptLoaded(true)} />
      {/* <Modal title='Eh?' subTitle='Meow' /> */}
      {formStep === 1 && (<div className={styles.form}>
        <h1>Enter your Destination</h1>
        <Input type='autoComplete' width='100%' getValue={getValue} listData={suggestions} />
        <Button text='Add' background='#1C6758' color='white' margin='10px' onClick={processLocation} />
      </div>)}

      {formStep === 2 && (<div>
        <div id="map-div" className={styles.mapContainer}></div>
      </div>)}
    </div>
  )
}

export default Form;