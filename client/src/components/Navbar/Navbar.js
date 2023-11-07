import React from 'react'
import logo from '../../assets/logo.png'
import './styles.css'

function Navbar() {
    return (
        <div className='Navbar'>
            <img src={logo} alt='logo' width="150px" />
            <ul>
                <li><a href='google.com'>HOME</a></li>
                <li><a href='google.com'>STORY</a></li>
                <li><a href='google.com'>MENU</a></li>
                <li><a href='google.com'>CONTACT</a></li>
                <li><button>ORDER NOW</button></li>
            </ul>
        </div>
    )
}

export default Navbar