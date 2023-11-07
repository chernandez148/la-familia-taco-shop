import React, { useState, useEffect } from 'react'
import Hero from './Hero/Hero'
import Story from './Story/Story'
import BRollVideo from './BRollVideo/BRollVideo'
import Menu from './Menu/Menu'
import Reservations from './Reservations/Reservations'
import carouselOne from '../../assets/carousel-one.png'
import carouselTwo from '../../assets/carousel-two.jpg'
import carouselThree from '../../assets/carousel-three.jpg'
import carouselFour from '../../assets/carousel-four.png'
import carouselFive from '../../assets/carousel-five.jpg'
import { GrPrevious, GrNext } from 'react-icons/gr';
import './styles.css'

function Home() {
    const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(false)

    const backgroundImages = [
        { name: "carousel one", url: carouselOne },
        { name: "carousel two", url: carouselTwo },
        { name: "carousel three", url: carouselThree },
        { name: "carousel four", url: carouselFour },
        { name: "carousel five", url: carouselFive }
    ];

    useEffect(() => {

        setInterval(() => {
            setFadeIn(true)
        }, 500);

        const timer = setTimeout(() => {
            if (backgroundImageIndex < backgroundImages.length - 1) {
                setBackgroundImageIndex((prevIndex) => prevIndex + 1);
            } else {
                setBackgroundImageIndex(0);
            }
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [backgroundImageIndex]);

    const handlePrev = () => {
        if (backgroundImageIndex > 0) {
            setBackgroundImageIndex((prevIndex) => prevIndex - 1);
        } else {
            setBackgroundImageIndex(backgroundImages.length - 1);
        }
    }

    const handleNext = () => {
        if (backgroundImageIndex < backgroundImages.length - 1) {
            setBackgroundImageIndex((prevIndex) => prevIndex + 1);
        } else {
            setBackgroundImageIndex(0);
        }
    }

    return (
        <div className='Home'>
            {backgroundImages.map((image, index) => (
                <>
                    <img src={image.url} alt={image.name} style={{
                        position: "absolute",
                        left: "0",
                        width: "100%",
                        height: "100svh",
                        opacity: backgroundImageIndex === index ? "1" : "0",
                        transition: "opacity 1s ease-in-out",
                        objectFit: "cover"
                    }} />
                </>
            ))}
            <div className='overlay'></div>
            <div className='carousel-btns'>
                <button onClick={handlePrev}><GrPrevious size={36} /></button>
                <button onClick={handleNext}><GrNext size={36} /></button>
            </div>
            <div className='home-wrapper' style={{ opacity: !fadeIn ? "0" : "1" }}>
                <Hero />
                <Story />
                <BRollVideo />
                <Menu />
                <Reservations />
            </div>

        </div>
    )
}

export default Home