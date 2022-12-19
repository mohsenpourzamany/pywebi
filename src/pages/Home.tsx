import React from 'react'
import Carousel from '../header/Carousel'
import Facts from '../components/Facts'
import About from './About'
import Features from './Features'
import Services from './Services'
import PricePlane from './PricePlane'
import Qoute from './Qoute'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
        <Carousel />
        <Facts />
        <About />
        <Features />
        <Services />
        <PricePlane />
        <Qoute />
        <Testimonial />
    </div>
  )
}

export default Home