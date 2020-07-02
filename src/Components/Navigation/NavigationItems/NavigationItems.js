import React from 'react'
import './NavigationItems.css'
import NavItem from './NavItem/NavItem'
/**
* @author
* @function 
**/

const NavigationItems = (props) => {
    return (
        <ul className="Nav_items">
            <NavItem>Question Library</NavItem>
            <NavItem>Theory Series</NavItem>
            <NavItem>Mock Tests</NavItem>
            <NavItem>Subscribe</NavItem>
        </ul>
    )

}

export default NavigationItems;