import React from 'react'
import logo from '../../assets/logo.png'
import './styles.css'

function Navbar() {
    return (
        <div className='Navbar'>
            <img src={logo} alt='logo' width="150px" />
            <ul>
                <li><a href='#'>HOME</a></li>
                <li><a href='#'>STORY</a></li>
                <li><a href='#'>MENU</a></li>
                <li><a href='#'>CONTACT</a></li>
                <li><button>ORDER NOW</button></li>
            </ul>
        </div>
    )
}

export default Navbar