import React from 'react'
import Feature from '../components/FeatureCard';
import Hero from '../components/Hero';
import { features } from '../constant';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

const index = () => {
  return (
    <div>
      <Head>
        <title>MoodTrip</title>
      </Head>
      <Navbar />
      <Hero />
      <Feature data={features} />
      <Footer />
    </div>
  )
}

export default index;