import React from 'react'
import Hero from '../components/hero/Hero'
import Banner from '../components/banner/BANNER.JSX'
import Latest from '../components/latestProducts/Latest'
import Card from '../components/card/Card'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Banner/>
      <Latest/>
    </div>
  )
}

export default Home