import React, { useState } from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SideBAr from '../SideBAR/SideBAr'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
/**
* @author
* @function 
**/

const Toolbar = (props) => {
    const [open, setOpen] = useState(false)
const handleclick = ()=>{
    setOpen(true)
}
const handleclose = ()=>{
    setOpen(false)
}
    return (
        <header className="Toolbar">
            {open ? <div className="crossBTN">
                <button className="_openClose" onClick={handleclose}><ClearIcon style={{ fontSize: 40 }}/></button>

            </div> : <div className="crossBTN">
                    <button className="_openClose" onClick={handleclick}><MenuIcon style={{ fontSize: 40 }} /></button>

                </div>}

            <div className="_toolLogo">
                <Logo />
            </div>
            <nav className="navMobOnly">
                <NavigationItems />
            </nav>
            <button className="_buton">Login</button>
            <SideBAr open={open} />
        </header>
    );

}

export default Toolbar;