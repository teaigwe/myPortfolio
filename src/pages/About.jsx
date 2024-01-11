import React from 'react'
import Nav_bar from '../components/Nav_bar'
import AboutMyself from '../components/AboutMyself'

const About = () => {
  return (
    <div className='about'>
        <Nav_bar/>
    <div className='heading'>
<h1>About Me</h1>
    </div>
        <AboutMyself/>
         
    </div>
  )
}

export default About