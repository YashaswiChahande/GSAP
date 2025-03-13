import React, { useRef } from 'react'
import img1 from "../assets/Staggerimg/img1.jpg"
import img2 from "../assets/Staggerimg/img2.jpg"
import img3 from "../assets/Staggerimg/img3.jpg"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';


const StaggerAnim = () => {

    useGSAP(()=>{
        gsap.set('img',{
            yPercent: -100,
        })
        gsap.set('p',{
            opacity: 0,
        })
        gsap.to('img', {
            yPercent: 0,
            scale: 1.3,
            duration: 1.5,
            delay: .5,
            stagger: .1,
            ease: "power4.out",
            onComplete: scaleDownAndFadeIn

        } )

    function scaleDownAndFadeIn(){
            gsap.to('img', {
                scale:1,
                duration: 1
            })
            // gsap.to('p', {
            //     opacity: 1,
            //     y: 50,
            //     stagger: .3,
            //     duration: 2
            // }
            // )
            gsap.fromTo('p', {
                y: -50,
                x: -50,
            }, {
                opacity: 1,
                y: 50,
                x:0,
                stagger: .3, 
                duration: 2

            })
        }
    })

    
  return (
    <div className='m-0 h-[100vh] grid place-content-center'>
        <section className='flex justify-between gap-[4em]'>
        <div className="mask overflow-hidden relative">
            <img 
                className='w-full h-[80vh]'
                src={img1} alt="Abstract image"
            />
            <p className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 font-bold text-[2rem] italic m-0'>
                living
            </p>
        </div>
        <div className="mask overflow-hidden relative">
            <img 
                className='w-full h-[80vh]'
                src={img2} alt="Abstract image"
            />
            <p className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 font-bold text-[2rem] italic m-0'>
                in
            </p>
        </div>
        <div className="mask overflow-hidden relative">
            <img 
                className='w-full h-[80vh]'
                src={img3} alt="Abstract image"
            />
            <p 
                className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 font-bold text-[2rem] italic m-0 text-white'>
                abstraction
            </p>
        </div>
        
        </section>
    </div>
  )
}

export default StaggerAnim