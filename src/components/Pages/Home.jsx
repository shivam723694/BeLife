import React from 'react'
import HealthSlider from '../slider/HealthSlider'
import ServiceCard from './ServiceCard'
import Hero from './Hero'
import Overview from './Overview'
import HealthPackages from './HealthPackages'
import WhyBookTests from './WhyBookTests'

const Home = () => {
  return (
    <div>
       {/* <HealthSlider /> */}
       <Hero />
       <HealthPackages />
       <Overview />
       <ServiceCard />
       <WhyBookTests />
      
    </div>
  )
}

export default Home
