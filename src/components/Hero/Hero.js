import React, { useRef, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Ensure the video is muted
      videoRef.current.play().catch(error => {
        // Handle the error
        console.error('Error attempting to play', error);
      });
    }
  }, []);

  return (
    <section className="hero-section">
      <Parallax y={[-20, 20]} tagOuter="figure">
        <video
          ref={videoRef}
          className="hero-video"
          muted
          autoPlay
          loop
          playsInline
          disablepictureinpicture
        >
          <source src="/konserta.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </Parallax>
  </section>

  );
};

export default Hero;
