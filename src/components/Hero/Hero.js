import React, { useRef, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true; // Ensure the video is muted
            videoRef.current.play();
        }
    }, []);

    return (
        <div className="video-container">
            <video ref={videoRef} controls muted>
                <source src="/konserta.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Hero;