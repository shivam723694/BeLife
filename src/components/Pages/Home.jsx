import React from 'react'
import HealthSlider from '../slider/HealthSlider'
import Hero from './Hero'
import HealthPackages from './HealthPackages'
import WhyBookTests from './WhyBookTests'
import BeLifeStats from './BeLifeStats'
import ServicesCards from './cards/ServicesCards'
import AppointmentForm from './AppointmentForm'
import HealthcareBanner from '../banner/HealthcareBanner'
import NABLBadge from './Nabl'
import HealthCheckupCarousel from './PackageIcons'
import MedicalServices from './MedicalServices'


const Home = () => {
    return (
        <div>
            {/* <HealthSlider /> */}
            <NABLBadge />
            <Hero />
            <HealthCheckupCarousel />
            <HealthcareBanner />
            
            <HealthPackages />
            <ServicesCards />
            <MedicalServices />
            <BeLifeStats />
            <WhyBookTests />

        </div>
    )
}

export default Home
