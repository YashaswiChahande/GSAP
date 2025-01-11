gsap.to("#page2 img", {
    width: "100%",
    scrollTrigger:{
        trigger:"#page2",//always traget elements parent instead of(#page2 img) while using Pin
        // 
        scroller:"body",
        markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})