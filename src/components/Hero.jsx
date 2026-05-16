import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    //Check if videoRef is currently attached to any element, if it is set the playbackRate of that element to 3

    //This provides micro animations that make your website feel fast

    if (videoRef.current) videoRef.current.playbackRate = 3;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
      </div>

      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

      <button>Buy</button>

      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
