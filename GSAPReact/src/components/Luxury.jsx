import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

const Luxury = () => {

    const containerRef = useRef()
    const text = useRef()

    useGSAP(()=>{
        
       const tween = gsap.to(containerRef.current, {
            borderRadius: '2%',
            width:'20vw',
            height:'28vw',
            duration: 0.5,
            paused: true,
            
        })

        let tween2 = gsap.to(text.current, {
            fontSize: 'clamp(5rem,5vw,10rem)',
            x: 0,
            paused: true
        })
        const handleMouseEnter = () => {
            tween.play();
            tween2.play();
          };
          
          const handleMouseLeave = () => {
            tween.reverse();
            tween2.reverse();
          };
      
          const container = containerRef.current;
          container.addEventListener("mouseenter", handleMouseEnter);
          container.addEventListener("mouseleave", handleMouseLeave);
      
          return () => {
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
          };
        }, []);
  return (

    <div className='m-0 h-[100vh] bg-[#f0f6ce] text-[#f0f6ce] grid place-content-center '>
        <div
            ref={containerRef} 
            className=' cursor-pointer grid place-content-center h-[16vw] w-[16vw] bg-[#ce5700] rounded-[50%]' >
            <p 
                ref={text}
                className=' font-[playfairdisplay] text-[clamp(10rem,5vw,17rem)] translate-x-[30%] '>
                Luxury
            </p>
        </div>
    </div>
    
  )
}

export default Luxury