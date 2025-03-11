import React from 'react'
import { useEffect, useRef } from "react";
import gsap from "gsap";


const Transitionpage = () => {
    const progress = useRef(null);
    const title = useRef(null);
  
    useEffect(() => {
      gsap.to(progress.current, {
        width: "100%",
        duration: 2,
        ease: "power4.out"
      });
  
      gsap.from(title.current, {
        y: -200,
            duration: 2,
            ease: "elastic.out(1, 0.3)"
      });
  
      gsap.to(progress.current, {
        height: "100%",
        top: 0,
        delay: 2,
        backgroundColor: "white",
        opacity: 0.5
      });
    }, []);
  return (
    <div>
    <h1 
      ref={title}
      className="text-[20rem] opacity-[0.1] mt-[18%]  text-center ">
        BORING
        </h1>
    <div 
      ref={progress}
      className="bg-[#a1bcff] h-[3px]  absolute top-[50%] "
      ></div>
  </div>
  )
}

export default Transitionpage