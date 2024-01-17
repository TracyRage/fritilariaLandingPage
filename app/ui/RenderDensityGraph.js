"use client"; 
import lottie from 'lottie-web';
import React, {useEffect, useRef} from "react";


const RenderAnimation = ({pathname, loop}) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: loop,
      autoplay: true,
      animationData: require(`${pathname}`)
    });

    return () => instance.destroy()

  }, [pathname, loop]);

  return <div ref={containerRef} />;
};

export default RenderAnimation;

