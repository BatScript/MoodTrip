'use client'
import React, { useState, useEffect } from 'react'
import StepOne from './StepOne/StepOne'
import StepTwo from './StepTwo'
const Form = () => {
  const [searchQuery, setSeacrchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [selectedData, setSelectedData] = useState('')
  const [formStep, setFormStep] = useState(1)

  const triggerMapLoad = (coordinates) => {
    const API_KEY = 'A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR'
    const APPLICATION_NAME = 'My Application'
    const APPLICATION_VERSION = '1.0'
    // var roundLatLng = Formatters?.roundLatLng

    tt?.setProductInfo(APPLICATION_NAME, APPLICATION_VERSION)

    const LOCATION = { lng: coordinates.lon, lat: coordinates.lat }

    var map = tt?.map({
      key: API_KEY,
      container: 'map-div',
      center: LOCATION,
      zoom: 13,
      // dragPan: !isMobileOrTablet(),
      // setStyle: satelliteConfig
    })

    map.addControl(new tt.FullscreenControl())
    // new tt.Popup({ className: "tt-popup" }).setLngLat(LOCATION).setHTML("Click anywhere on the map to lookup the clicked lat lon.").addTo(map);
    map.on('click', function (event) {
      var lngLat = new tt.LngLat(
        roundLatLng(event.lngLat.lng),
        roundLatLng(event.lngLat.lat)
      )
      new tt.Popup({ className: 'tt-popup' })
        .setLngLat(lngLat)
        .setHTML(lngLat.toString())
        .addTo(map)
    })
  }

  const getValue = (data) => {
    setSeacrchQuery(data)
    setSelectedData(data)
  }

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetch(
        'https://api.tomtom.com/search/2/search/' +
          searchQuery +
          '.json?key=Njiq5vcXD9JthLMnyvBGGdTBzDAxt2AY&typeahead=true&limit=4&countrySet=IN'
      )
        .then((response) => response.json())
        .then((data) => setSuggestions(data.results))
    }
  }, [searchQuery])

  useEffect(() => {
    if (formStep === 2) {
      triggerMapLoad(selectedData.position)
    }
  }, [formStep, selectedData.position])

  const processLocation = async () => {
    console.log('added', selectedData)
    // if (mapScriptLoaded) {
    setFormStep(2)
    // }
  }

  return (
    <>
      {/* <Modal title='Eh?' subTitle='Meow' /> */}
      {formStep === 1 && (
        <StepOne
          getValue={getValue}
          listData={suggestions}
          buttonClick={processLocation}
        />
      )}

      {formStep === 2 && <StepTwo />}
    </>
  )
}

export default Form
