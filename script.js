// let slideIndex = 0;
// showSlides(slideIndex);

// function changeSlide(n) {
//     showSlides(slideIndex += n);
// }

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