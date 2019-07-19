import React from 'react'
import {NavLink} from 'react-router-dom'

 const Nav = (props) =>{
    return (
        <div  className="nav">
            <ul>
                <li><NavLink className="navlink" to='/'>Home</NavLink></li>
              
                <li><NavLink className="navlink" to='/cart'>Cart</NavLink></li>
            </ul>
        </div>
    )
}
export default Nav
