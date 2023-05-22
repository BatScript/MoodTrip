import React from 'react'
import Form from '../../container/DestinationForm/Form'
import Layout from '../../components/UI/Layout'
import Script from 'next/script'
import Head from 'next/head'

const AddTrip = () => {
  return (
    <Layout>
      <Script
        strategy='beforeInteractive'
        src='https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.5.0/maps/maps-web.min.js'
      />
      <Head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.5.0/maps/maps.css'
        />
      </Head>
      <Form />
    </Layout>
  )
}

export default AddTrip
