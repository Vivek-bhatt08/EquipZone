// let slideIndex = 0;
// showSlides(slideIndex);

// function changeSlide(n) {
//     showSlides(slideIndex += n);
// }
var a=document.querySelector("#page1")
var b=document.querySelector("#page2")
var c=document.querySelector("#page3")
var d=document.querySelector("#page4")
var tl=gsap.timeline()
a.addEventListener('mouseenter',()=>{


    tl.to("#animate1",{
        y:-300,
        duration:.5,
        scale:1
    })
})
a.addEventListener('mouseleave',()=>{

    tl.to("#animate1",{
      y:"-45%",
      duration:1,
      stagger:.2
  // scale:1.2
  })
  })
  b.addEventListener('mouseenter',()=>{

    tl.to("#animate2",{
        y:-300,
        duration:.5,
        scale:1
    })
})
b.addEventListener('mouseleave',()=>{

    tl.to("#animate2",{
      y:"-45%",
      duration:1,
      stagger:.2
  // scale:1.2
  })
  })
  c.addEventListener('mouseenter',()=>{

    tl.to("#animate3",{
        y:-300,
        duration:.5,
        scale:1
    })
})
c.addEventListener('mouseleave',()=>{

    tl.to("#animate3",{
      y:"-45%",
      duration:1,
      stagger:.2
  // scale:1.2
  })
  })
  d.addEventListener('mouseenter',()=>{

    tl.to("#animate4",{
        y:-300,
        duration:.5,
        scale:1
    })
})
d.addEventListener('mouseleave',()=>{

    tl.to("#animate4",{
      y:"-45%",
      duration:1,
      stagger:.2
  // scale:1.2
  })
  })
 

// function showSlides(n) {
//     const slides = document.querySelectorAll('.slide');
//     if (n >= slides.length) slideIndex = 0;
//     if (n < 0) slideIndex = slides.length - 1;
    
//     slides.forEach((slide, index) => {
//         slide.style.display = (index === slideIndex) ? 'block' : 'none';
//     });
// }

function searchShown(){
    let a = document.getElementById('search');
    // Toggle the display between 'none' and 'block'
    if (a.style.display === 'block') {
        a.style.display = 'none';
    } else {
        a.style.display = 'block';
    }
}





// Retrieve the logged-in user's information from localStorage
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

// Check if a user is logged in and display their email
if (loggedInUser) {
    let a=`${loggedInUser.email}`;
    let str="";
    str+=a[0].toUpperCase();
    for(let i=1;a[i]!='@';i++)
    {
        if(isNaN(a[i]))
        str+=a[i];
    }
	window.alert(`Logged in as: ${str}`);
} else {
    // Redirect to login page if no user is logged in
    window.location.href = 'Authentication/login.html';
}

