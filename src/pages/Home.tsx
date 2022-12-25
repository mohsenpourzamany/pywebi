import React from 'react'
import Carousel from '../header/Carousel'
import Facts from '../components/Facts'
import About from './About'
import Features from './Features'
import Services from './Services'
import PricePlane from './PricePlane'
import Qoute from './Qoute'
import Testimonial from './Testimonial'
import Team from './Team'
import Blog from './Blog'
import Vender from './Vender'

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
        <Team />
        <Blog />
        <Vender />
    </div>
  )
}

export default Home