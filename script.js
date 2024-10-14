function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    }
    function nav(){
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
        }



function split(){
    var allh1=document.querySelectorAll("#words h1")
    allh1.forEach(function(elem){
    var clutter=""
    var h1text=elem.textContent
    var splittext=h1text.split("")  

    splittext.forEach(function(e){
        clutter+=`<span>${e}</span>`
    })
    elem.innerHTML=clutter
    })
}
function animation(){
gsap.to("#words h1 span",{
    color:"#fff",
    stagger:.1,
    scrollTrigger:{
        trigger:"#words",
        scroller:"body",
      
        start:"top 50%",
        end:"top -10%",
        scrub:2


    }
})
}


nav()
split()
animation()

// locoscroll()




