import React from 'react'
import HealthSlider from '../slider/HealthSlider'
import Hero from './Hero'
import Overview from './Overview'
import HealthPackages from './HealthPackages'
import WhyBookTests from './WhyBookTests'
import BeLifeStats from './BeLifeStats'
import ServicesCards from './cards/ServicesCards'

const Home = () => {
  return (
    <div>
       {/* <HealthSlider /> */}
       <Hero />
       <HealthPackages />
       <Overview />
       <ServicesCards />




    

       
       
       
       <BeLifeStats />




       <WhyBookTests />
      
    </div>
  )
}

export default Home
