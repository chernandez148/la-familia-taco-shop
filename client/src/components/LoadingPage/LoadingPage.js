import React from 'react'
import logo from '../../assets/logo.png'
import './styles.css'

function LoadingPage({ isLoading, loadingPage }) {
    return (
        <div className='LoadingPage' style={{ top: loadingPage ? "0" : "-99999px" }}>
            <div className='image-wrapper' style={{ height: isLoading ? "0" : "127.33px" }} >
                <img src={logo} alt='logo' />
            </div>
        </div>
    )
}

export default LoadingPage