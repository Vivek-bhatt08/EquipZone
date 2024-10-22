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


