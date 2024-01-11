import React from 'react'
import myPic from '../assets/me_famz-removebg-preview.png'
import Nav_bar from './Nav_bar'

const Intro = () => {
  return (
    <div className='intro'> 
   
<div className='introtext'>
<h1> Front-End <br />Developer & <br />Child of God</h1>
<h3>Hi, I am Tony and <br />I love to create <br />aesthetic and highly <br />functional websites.
</h3>
<button className='introbtn'><h2>Hire Me</h2></button>
</div>
<div className='pic'><img src={myPic} alt="" />
</div>
    </div>
  )
}

export default Intro