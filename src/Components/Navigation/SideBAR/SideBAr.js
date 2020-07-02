import React, { useState } from 'react'
import './SideBar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'


const SideBAr = (props) => {
    let classApply = "Side_Bar close"
    if (props.open) {
        classApply = "Side_Bar open"
    }

    return (
        <div className={classApply}>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )

}

export default SideBAr;