import React, { useState, useEffect } from 'react'
import logo from '../../../assets/logo.png'
import { FaFacebookF, FaInstagram, FaYelp } from 'react-icons/fa';
import doordash from '../../../assets/doordash.png'
import postmates from '../../../assets/postmates.png'
import toast from '../../../assets/toast.png'
import './styles.css'

function Hero() {
    const [yAxis, setYAxis] = useState(0)
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {

        const position = setTimeout(() => {
            if (yAxis < 20) {
                setYAxis((prevAxis) => prevAxis + 1)
                setOpacity((prevOpacity) => prevOpacity - 0.06);
            } else {
                setYAxis(0)
                setOpacity(1);
            }
        }, 50);

        return () => {
            clearTimeout(position);
        };
    }, [yAxis, opacity])

    return (
        <div className='Hero'>
            <img src={logo} width="350px" alt='logo' />
            <div className='scroll-indicator'>
                <div className='scroll-indicator-wrapper'>
                    <span
                        className='dot'
                        style={{ top: yAxis, opacity: opacity }}
                    ></span>
                </div>
                <p><i>scroll down</i></p>
            </div>
            <div className='bottom-hero'>
                <div className='bottom-left'>
                    <h6>Order From:</h6>
                    <ul>
                        <li><img src={toast} width="50px" alt='toast' /></li>
                        <li><img src={doordash} width="25px" alt='doordash' /></li>
                        <li><img src={postmates} width="25px" alt='postmates' /></li>
                    </ul>
                </div>
                <div className='bottom-right'>
                    <h6>Follow Us:</h6>
                    <ul>
                        <li><FaYelp /></li>
                        <li><FaInstagram /></li>
                        <li><FaFacebookF /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero