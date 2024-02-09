/* Function that sticks the navbar to the top of the screen */
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    /* Stick navbar to top when scrolling */
    function handleScroll() {
        if (window.scrollY >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class 'fade-in-text'
    var fadeElements = document.querySelectorAll(".fade-in-text");

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll events
    function handleScroll() {
        fadeElements.forEach(function (element) {
            if (isElementInViewport(element) && element.style.opacity !== "1") {
                element.style.opacity = 1;
            }
        });
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Trigger the handleScroll function on page load to check initial visibility
    handleScroll();
});


// Function to display slides in a slideshow automatically
function showSlides() {
    // Get all elements with the class "mySlides"
    var slides = document.getElementsByClassName("mySlides");
   /* Loop through all the slides and hide them */
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none"; 
    }
    /*Increment the slide index*/
    slideIndex++; 
    /*If the slide index exceeds the total number of slides, reset the slide index to 1 */
    if(slideIndex > slides.length){
        slideIndex = 1; 
    }
    /*Display the current slide (hint: change its display)*/
    slides[slideIndex-1].style.display = "block"; 
  
    // Call this function recursively after 10000 milliseconds (10 seconds)
    setTimeout(showSlides, 10000); 
}
/*variable to keep track of the slide index*/
var slideIndex = 0;
showSlides(); 