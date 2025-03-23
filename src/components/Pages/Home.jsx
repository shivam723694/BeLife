import React from 'react'
import HealthSlider from '../slider/HealthSlider'
import Hero from './Hero'
import Overview from './Overview'
import HealthPackages from './HealthPackages'
import WhyBookTests from './WhyBookTests'
import BeLifeStats from './BeLifeStats'
import ServicesCards from './cards/ServicesCards'
import AppointmentForm from './AppointmentForm'
import HealthcareBanner from '../banner/HealthcareBanner'

const Home = () => {
    return (
        <div>
            {/* <HealthSlider /> */}
            <HealthcareBanner />
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
