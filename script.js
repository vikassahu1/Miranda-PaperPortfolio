// For smooth scroll in locomotive js 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline();

tl.to("#page1",{
    y:"100vh",
    scale:0.4,
    duration:0,
})

tl.to("#page1",{
    y:"10vh",
    duration:1,
    delay:1,
})
tl.to("#page1",{
    rotate:-360,
    // y:"0vh",
    duration:0.8,
    delay:1,
    scale:1,
})