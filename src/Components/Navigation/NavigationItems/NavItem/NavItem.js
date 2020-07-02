import React from 'react'
import './NavItem.css'
/**
* @author
* @function 
**/

const NavItem = (props) => {
    return (
        <li className="nav-Item"><a href="/">{props.children}</a></li>
    )

}

export default NavItem