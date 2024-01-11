import React from 'react'
import { Link } from 'react-router-dom'



const Nav_bar = () => {
  return (
    <div className='navbar '> 
       <ul>  
 <li> <Link to='/'><h2>Onyi.Co yo</h2></Link></li>
<li> <Link to='/'> <h2>Home</h2> </Link></li>
<li> <Link to='/About'><h2>About</h2></Link></li>
<li> <Link to='/Portfolio'><h2>Portfolio</h2></Link> </li>
<li> <Link to='/Blog'><h2>Blog</h2></Link> </li>
<li> <Link to='/Contact'><h2>Contact</h2></Link></li>
<li><Link to='/'><h2>Fire Me an Email!</h2></Link> </li>
       </ul>
    </div>
  )
}

export default Nav_bar