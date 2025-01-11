gsap.to("#page2 h1",{
    transform: "translateX(-125%)",
    scrollTrigger:{
        trigger:"#page2",//always target parent
        scroller:"body",
        markers: true,
        scrub: 5,
        start: "top 0",
        end: "-100",
        pin: true
    }
})