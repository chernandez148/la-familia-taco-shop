import React, { useState, useRef } from 'react'
import bRoll from '../../../assets/b-roll.mp4'
import thumbnail from '../../../assets/video-thumbnail.png'
import { IoPlaySharp, IoPause } from 'react-icons/io5';
import './styles.css'

function BRollVideo() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };
    return (
        <div className='BRollVideo'>
            <video ref={videoRef} width="100%" height="100%" style={{ position: "relative" }}>
                <source src={bRoll} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='b-roll-video-wrapper' >
                <img src={thumbnail} width="100%" style={{ opacity: isPlaying ? "0" : "1" }} />
                <button onClick={togglePlay} style={{ opacity: 1, bottom: isPlaying ? "0" : "50%", left: isPlaying ? "0" : "50%", margin: isPlaying ? "1rem" : "" }}>
                    {isPlaying ? <IoPause /> : <IoPlaySharp size={36} />}
                </button>
            </div>
        </div>
    )
}

export default BRollVideo