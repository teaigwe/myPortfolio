import React from 'react'
import Nav_bar from '../components/Nav_bar'
import Intro from '../components/Intro'
import Footer from '../components/Footer'
import AboutMyself from '../components/AboutMyself'

const Home = () => {
  return (
    <>
        <Nav_bar/>
        <Intro/>
        <AboutMyself/>
        <Footer/>
    </>
  )
}

export default Home