import React from 'react'
import logo from '../../../assets/logo.png'
import './styles.css'

function Story() {
    return (
        <div className='Story'>
            <div className='story-wrapper'>
                <div className='story-left'>
                    <div className='story-text'>
                        <h1>FROM HUMMBLE BEGINNINGS</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus hendrerit odio in tortor euismod, et
                            tincidunt metus tristique. Praesent vehicula elit non ex
                            eleifend, a vestibulum purus tempor. Cras eget tellus
                            at justo dignissim tristique. Nullam feugiat auctor velit,
                            eu bibendum elit fermentum a. Nulla bibendum ex a
                            velit volutpat, at tempor sem volutpat. Duis a
                            vestibulum dui.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus hendrerit odio in tortor euismod, et
                            tincidunt metus tristique. Praesent vehicula elit non ex
                            eleifend, a vestibulum purus tempor. Cras eget tellus
                            at justo dignissim tristique. Nullam feugiat auctor velit,
                            eu bibendum elit fermentum a. Nulla bibendum ex a
                            velit volutpat, at tempor sem volutpat. Duis a
                            vestibulum dui.
                        </p>
                    </div>
                    <img src={logo} width="600px" alt='logo' />
                </div>
                <div className='story-right'>
                    <div className='mosaic-1'></div>
                    <div className='mosaic-2'></div>
                    <div className='mosaic-3'></div>
                    <div className='mosaic-4'></div>
                    <div className='mosaic-5'></div>
                    <div className='mosaic-6'></div>
                </div>
            </div>
            <div className='vertical-line'></div>
        </div>
    )
}

export default Story