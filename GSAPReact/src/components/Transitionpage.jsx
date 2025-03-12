import React from 'react'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const Transitionpage = () => {
    const progress = useRef(null);
    const title = useRef(null);
  
    useGSAP(() => {
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
    },);
  return (
    <body className="h-[100vh] bg-[#2864ff] text-white ">
    <h1 
      ref={title}
      className="text-[20rem] opacity-[0.1] mt-28 text-center ">
        BORING
        </h1>
    <div 
      ref={progress}
      className="bg-[#a1bcff] h-[3px]  absolute top-[50%] "
      ></div>
  </body>
  )
}

export default Transitionpage