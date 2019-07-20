import React from 'react'
import {NavLink} from 'react-router-dom'

 const Nav = (props) =>{
    return (
        <div  className="nav">
            <ul>
                <li><NavLink className="navlink" to='/'>Home</NavLink></li>
              
                <li><NavLink className="navlink" to='/cart'>Cart</NavLink></li>
                
            </ul>
            <h1 className="desktitle">Webapp-Records (Antique)</h1>
        </div>
    )
}
export default Nav
