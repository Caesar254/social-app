import React from 'react'
import './styles.css'
import { Link , NavLink} from "react-router-dom";



function Nav() {
  return (
    <div className='nav'>
        <h2 className='nav-brand'>Social-App</h2>
        <ul className='menu'>
            <li><Link to="/" style={{textDecoration: "none"}} className='menu-btn'>Feed</Link></li>
            <li><Link to="/login" style={{textDecoration: "none"}} className='menu-btn'>Login</Link></li>
           
        </ul>
    </div>
  )
}

export default Nav

