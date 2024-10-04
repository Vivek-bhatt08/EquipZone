var tl=gsap.timeline();
tl.from(" #nav #first h2,img",{
    x:-50,
    opacity:0,
    duration:.8,
    delay:1,
    stagger:.3
   
} )

gsap.from("#center h1,h2",{
    x:-120,
    opacity:0,
    duration:1,
    stagger:.3

})

